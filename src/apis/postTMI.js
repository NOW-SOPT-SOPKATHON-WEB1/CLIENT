import serverAxios from './serverAxios';

/* 방 생성 API */
const postTMI = async (name, content) => {
  try {
    const res = await serverAxios.post(`/room/create`, {
      "name" : name,
      "content" : content
    });
    console.log({res, name, content});
    return res.data.status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default postTMI;
