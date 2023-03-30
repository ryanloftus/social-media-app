import { Image } from "expo-image";
import { ImageUrl } from "../../types/Url";
import { View, Text } from "../Themed";

export interface ChatBannerProps {
    chatName: string,
    chatIcon: ImageUrl,
    lastMessage: {
        message: string,
        timestamp: string,
    },
};

export default function ChatBanner(props: ChatBannerProps) {
    return (
        <View>
            <Text>{props.chatName}</Text>
            <Image source={props.chatIcon} />
            <Text>{props.lastMessage.message}</Text>
            <Text>{props.lastMessage.timestamp}</Text>
        </View>
    );
}

// TODO animated circle + rectangles with same layout as ChatBanner
export function ChatBannerSkeleton() {
    return (
        <View>
            <Text>ChatBannerSkeleton</Text>
        </View>
    )
}
