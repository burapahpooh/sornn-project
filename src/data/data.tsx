export interface message {
  message_id: number;
  sender_user_id: number;
  message_text: string;
}

export interface conversation {
  conversation_id: number;
  user1_id: number;
  user2_id: number;
  user1_last_message_id: number;
  user2_last_message_id: number;
  messages: Array<message>;
}

export var conversations: Array<conversation> = [
  {
    conversation_id: 1,
    user1_id: 1,
    user2_id: 2,
    user1_last_message_id: 1,
    user2_last_message_id: 0,
    messages: [
      {
        message_id: 1,
        sender_user_id: 1,
        message_text: "Hello World",
      },
    ],
  },
];

export interface user {
  user_id: number;
  user_username: string;
  user_password: string;
  user_name: string;
  user_conversations: Array<string>;
}

export var users: Array<user> = [
  {
    user_id: 1,
    user_username: "A_username",
    user_password:
      "5509b107e434a78206bedd928ab8e622c859607ba64bda3d696e95e8c2a51074",
    user_name: "นักเรียนเอ",
    user_conversations: [],
  },
  {
    user_id: 2,
    user_username: "B_username",
    user_password:
      "a4b218ef7c58d89bbb4e73a30046bb6bad396bd665d7cb5549a01d6f30f22041",
    user_name: "อาจารย์บี",
    user_conversations: [""],
  },
];
