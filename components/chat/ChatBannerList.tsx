import React, { useCallback, useMemo, useRef, useState } from "react";
import ChatBanner, { ChatBannerProps, ChatBannerSkeleton } from "./ChatBanner";
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { Dimensions } from "react-native/types";

export default function ChatBannerList(props: ChatBannerProps[]) {
    const [data, setData] = useState<ChatBannerProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const layoutProvider = useRef(layoutProviderBuilder()).current;
    const dataProvider = useMemo(() => dataProviderBuilder(data), [data]);

    const load = useCallback(
        async (data: ChatBannerProps[], more: boolean = false) => {
            try {
                if (more) {
                    setIsLoadingMore(true);
                    const newData = await callChatsApiHere(data);
                    setData(newData);
                    setIsLoadingMore(false);
                } else {
                    setIsLoading(true);
                    const newData = await callChatsApiHere(data);
                    setData(newData);
                    setIsLoading(false);
                }

            } catch (e) {
                console.log(e);
            }
        },
        [],
    );

    // TODO: if loading then display list of skeleton chats
    // TODO: allow user to tap-and-hold chats to bring up multiselect for deletion
    return (
        <RecyclerListView
            renderFooter={() => isLoadingMore ? <ChatBannerSkeleton /> : <></>}
            onEndReached={() => load(data, true)}
            onEndReachedThreshold={1}
            layoutProvider={layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={rowRenderer}
        />
    );
}

let { width } = Dimensions.get('window');

const layoutProviderBuilder = () => new LayoutProvider(
    (index) => 0,
    (type, dim) => {
        dim.height = 100
        dim.width = width
    }
);

const dataProviderBuilder = (data: ChatBannerProps[]) => new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);

const rowRenderer = (type: any, data: ChatBannerProps) => <ChatBanner {...data} />;
