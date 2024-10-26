import React from 'react'
import Conversation from "./conversation.jsx";
import useGetConversations from '../../hooks/useGetConversations';
import ConversationSkeleton from '../skeletons/conversationSkeleton';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  // Sort conversations alphabetically by name
  const sortedConversations = [...conversations].sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );

  return (
    <div className='flex flex-col overflow-auto mb-8.5'>
      {loading
        ? [...Array(4)].map((_, idx) => <ConversationSkeleton key={idx} />)
        : sortedConversations.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              lastIdx={idx === sortedConversations.length - 1}
            />
          ))}
    </div>
  );
};

export default Conversations;