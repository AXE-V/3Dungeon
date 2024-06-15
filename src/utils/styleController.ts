import { DataTag, SetStyle, StyleController } from '../interfaces/StyleController';

const defaultTags = ['focusFill', 'focusStroke'];

// устанавливает стили для родительского и дочерних элементов, если они имеют соответствующие дата-теги
// иначе будуь задействованы стили по умолчанию
export function styleController<SC extends StyleController>(obj: SC) {
  const realTarget =
    'currentTarget' in obj.target ? obj.target.currentTarget.childNodes : obj.target;
  try {
    realTarget.forEach((elem: any) => {
      (obj.tags ?? defaultTags).forEach((dTag, i) => {
        if (elem.dataset[(dTag as DataTag).value ?? dTag]) {
          setStyle({
            target: elem,
            tag: obj.tags?.[i] ?? dTag,
            command: obj.command,
            style: obj.style ?? undefined,
          });
        }
      });

      elem?.childNodes.length > 0
        ? elem.childNodes.forEach((elem2: any) => {
            (obj.tags ?? defaultTags).forEach((dTag, i) => {
              if (elem2?.dataset[(dTag as DataTag).value ?? dTag]) {
                setStyle({
                  target: elem2,
                  tag: obj.tags?.[i] ?? dTag,
                  command: obj.command,
                  style: obj.style ?? undefined,
                });
              }
            });
          })
        : void 0;
    });
  } catch (error) {
    //  parent стиль
    try {
      (obj.tags ?? defaultTags).forEach((dTag: any, i: any) => {
        if (realTarget.dataset[(dTag as DataTag).value ?? dTag]) {
          setStyle({
            target: realTarget,
            tag: obj.tags?.[i] ?? dTag,
            command: obj.command,
            style: obj.style ?? undefined,
            originalStyle: obj.originalStyle,
          });
        }
      });
    } catch (error) {
      // console.log('ошибка установки стиля для parent', error);
    }
  }
}

const setStyle = (data: SetStyle) => {
  const { target, tag, style, command, originalStyle } = data;
  const transition = '.2s ease-out';

  if (command === 'add') {
    target.style.transition = `${(tag as DataTag).style?.transition ?? transition}`;
    Object.assign(target.style, { ...((tag as DataTag).style ?? style) });

    const ds = target.dataset;
    if (ds?.focusFill && ds?.focusStroke) {
      Object.assign(target.style, { ...((tag as DataTag).style ?? style) });
    } else if (ds?.focusStroke && !ds?.focusFill) {
      Object.assign(target.style, { ...((tag as DataTag).style ?? style), fill: 'none' });
    } else if (!ds?.focusStroke && ds?.focusFill) {
      Object.assign(target.style, { ...((tag as DataTag).style ?? style), stroke: 'none' });
    }
  } else if (command === 'remove') {
    target.style.cssText = originalStyle ?? void 0;
    target.style.transition = `${(tag as DataTag).style?.transition ?? transition}`;
    Object.assign(target.style, { ...((tag as DataTag).style ?? style) });
  }
};
