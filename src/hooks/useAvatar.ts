import { useEffect, useState } from "react";

export default function useAvatar(name: string) {
    const [img, setImg] = useState<string>()
    async function loadFromAPI(_name: string) /*sei que poderia usar diretamente a URL sem precisar processar o blob */{
        const _img = await fetch(`https://ui-avatars.com/api/?name=${_name}`);
        const blob = await _img.blob();
        const fr = new FileReader();
        fr.onload = function (evt) {
            return setImg(evt.target?.result as string);
        }
        fr.readAsDataURL(blob);
    }
    useEffect(function () {
        if (name) loadFromAPI(name)
    }, [name])

    return [img]
}