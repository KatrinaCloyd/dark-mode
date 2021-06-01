/* eslint-disable indent */
export const getBBcharacterList = async () => {
    const res = await fetch('https://www.breakingbadapi.com/api/characters');
    const array = await res.json();

    return array.map((char) => ({
        id: char.char_id,
        name: char.name,
        nickname: char.nickname,
        roles: char.occupation,
        image: char.img,
    }));
};
