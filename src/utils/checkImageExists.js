const checkImageExists = async (url) => {
  try {
    const response = await fetch(url, {
      method: "HEAD",
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};

export default checkImageExists;
