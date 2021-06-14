// eslint-disable-next-line
export const addScript = url => new Promise(res => {
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => {
    res();
  };
  document.body.appendChild(script);
});
