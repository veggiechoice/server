function ConvertStringToObject(element: string) {
  return element.split(',').map(el => {
    return {
      id: el,
    };
  });
}

export { ConvertStringToObject };
