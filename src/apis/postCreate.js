import serverAxios from './serverAxios';

/* 방 생성 API */
const postCreate = async (cnt) => {
  try {
    const res = await serverAxios.post(`/room/create`, { peopleCount: cnt });
    console.log({res, cnt});
    return res.data.status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default postCreate;
