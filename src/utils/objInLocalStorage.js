import { get, save } from './localStorage';

const saveObjToStorage = (key, data) => {
  const storageData = get(key) || {};
  const updatedData = {
    ...storageData,
    ...data,
  };
  save(key, updatedData);
};

const saveArrayItemToStorage = (key, item) => {
  const storageData = get(key) || [];
  const updatedData = [...storageData, item];
  save(key, updatedData);
};

const saveUniqueArrayItemToStorage = (key, item) => {
  const storageData = get(key) || [];
  const updatedData = [...new Set([...storageData, item])];
  save(key, updatedData);
};

const deleteArrayItemFromStorage = (key, item) => {
  const storageData = get(key);
  const updatedData = storageData?.filter(data => data.id !== item.id);
  save(key, updatedData);
};

export {
  saveObjToStorage,
  saveArrayItemToStorage,
  saveUniqueArrayItemToStorage,
  deleteArrayItemFromStorage,
};
