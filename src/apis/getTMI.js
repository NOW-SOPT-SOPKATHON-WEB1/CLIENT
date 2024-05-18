import serverAxios from './serverAxios';

/** 유저별 TMI 조회 API */
const getTMI = async (roomId, userId) => {
  try {
    const res = await serverAxios.get(`/room/${roomId}/${userId}`);
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getTMI;
