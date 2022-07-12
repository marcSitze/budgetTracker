export const generateID = (data) => {
  if(data.length === 0) {
    return 1;
  }else{
    return data[data.length - 1].id + 1
  }
}