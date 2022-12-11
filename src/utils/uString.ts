export const generateMarker = (prefix: string, start = "m") => {
  let marker: string | undefined;

  while (!marker) {
    let m = Math.random().toString().split(".").pop() as string;
    m = m.slice(0, 6);

    // vérifier qu'aucun élément dans le dom n'a cet attribut
    const el = document.querySelector(`[${start}-${prefix}="${m}"]`);
    if (!el) marker = m;
  }

  return marker;
};

export const textFormatPost = (text: string) => {
  text = textFormatPostHashtag(text);
  text = textFormatPostCit(text);
  return text;
};

export const textFormatPostHashtag = (text: string) => {
  const regex =
    /\B(#[a-zA-Z0-9_áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+\b)(?!;)/gm;
  const subst = `<span class="__hashtag">$1</span>`;
  text = text.replace(regex, subst);
  return text;
};

export const textFormatPostCit = (text: string) => {
  const regex = /\B(@[a-zA-Z0-9_]+\b)(?!;)/gm;
  const subst = `<span class="__cit">$1</span>`;
  text = text.replace(regex, subst);
  return text;
};
