const getPublishedDate = (date) => {
  if (date) {
    const published = new Date(date);
    const today = new Date();
    const time =
      (today.getTime() - published.getTime()) / (1000 * 60 * 60 * 24);
    return Math.floor(time);
    // return `${publishedDateObject.getFullYear()}/${
    //   publishedDateObject.getMonth() + 1
    // }/${publishedDateObject.getDate()} ${publishedDateObject.getHours()}:${publishedDateObject.getMinutes()}`;
  }
};

export default getPublishedDate;
