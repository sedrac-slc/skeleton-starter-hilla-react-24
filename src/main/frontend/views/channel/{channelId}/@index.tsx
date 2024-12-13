import { VerticalLayout } from '@vaadin/react-components/VerticalLayout';
import { MessageInput } from '@vaadin/react-components/MessageInput';
import { MessageList } from '@vaadin/react-components/MessageList';
import { useParams } from 'react-router-dom';

export default function ChannelView() {
    const { channelId } = useParams()

    return <VerticalLayout theme="padding spacing" className="h-full">
       <MessageList className="h-screen w-full border"/>
       <MessageInput className="w-full"/>
    </VerticalLayout>
}