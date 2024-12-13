import { VerticalLayout } from '@vaadin/react-components/VerticalLayout';
import { MessageInput } from '@vaadin/react-components/MessageInput';
import { MessageList } from '@vaadin/react-components/MessageList';
import { useParams } from 'react-router-dom';

export default function ChannelView() {
    const { channelId } = useParams()

    return <VerticalLayout theme="padding spacing" className="h-full bg-red-100">
                   <MessageList className="h-full w-full border"/>
                   <MessageInput className="w-full"/>
               </VerticalLayout>
}