export const path = {
  getBasename: (val: string) => {
    const valLength = val.split('/').length;
    const valBasename = val.split('/')[valLength - 1];
    return valBasename;
  },

  getName: (val: string) => {
    const valBasename = val.split('/')[val.split('/').length - 1];
    const valName = valBasename.split('.').slice(0, -1).join('.');
    return valName;
  },

  getExtension: (val: string) => {
    const valBasename = val.split('/')[val.split('/').length - 1];
    const valExtension = `${valBasename.split('.').slice(-1)}`;
    return valExtension;
  },
};
