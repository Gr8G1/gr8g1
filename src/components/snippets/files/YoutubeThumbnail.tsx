import Temp from './temp/Temp';

const code = `*** Youtube thumbnail ***
/**
 * * 유튜브 썸네일 이미지 추출
 *
 * @param {String} vUrl: 유튜브 링크 주소
 * @param {String} type: 대표 이미지 타입 상세
 * @param {String} preset: type: detail => 영상(시간대) 이미지 추출
 *
 */
function getYtThumbnail(vUrl, type, preset) {
    if (!vUrl) return;

    const _extractIdRegex = /(?:https?:\\/\\/)?(?:www\\.)?youtu\\.?be(?:\\.com)?\\/?.*(?:watch|embed)?(?:.*v=|v\\/|\\/)([\\w-_]+)/;
    const _extractYtIds = url => url.match(_extractIdRegex)[1];

    switch (type) {
        case 'detail':
            let hostY = 'https://img.youtube.com/vi/';
            let pathY;

            switch (preset) {
                case 'start': // 120x90
                    pathY = '/1.jpg';
                    break;
                case 'middle': // 120x90
                    pathY = '/2.jpg';
                    break;
                case 'end': // 120x90
                    pathY = '/3.jpg';
                    break;
                case 'max': // (1280x720, 1920x1080)
                    pathY = '/maxresdefault.jpg';
                    break;
                default:  // (480x360)
                    pathY = '/0.jpg';
                    break;
            }

            return \`\${hostY}\${_extractYtIds(vUrl)}\${pathY}\`;
        default:
            // Source type 1
            // let hostI = 'https://i.ytimg.com/vi/';
            // let pathI = '/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAQw1wMf1ew_Wr1a6cAYskANm8h_g';

            // Source type 2
            let hostI = 'https://img.youtube.com/vi/';
            let pathI = '/mqdefault.jpg';

            return \`\${hostI}\${_extractYtIds(vUrl)}\${pathI}\`;
    }
},
`;

export default () => <Temp code={code} />;
