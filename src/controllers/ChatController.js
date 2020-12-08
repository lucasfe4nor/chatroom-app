import User from '../models/User.js';
import ChatRoom from '../models/ChatRoom.js';
import Message from '../models/Message.js';

export default {
  async createChatRoom(req, res) {
    const { name, user_id } = req.body;

    try {
      const user = await User.findByPk(user_id);

      const [chatroom] = await ChatRoom.findOrCreate({
        where: { name },
      });

      await user.addChatRoom(chatroom);

      return res.json(chatroom);
    } catch (error) {
      console.log(error);
    }
  },

  async createMessage(req, res) {},

  async getMessages() {},
};
