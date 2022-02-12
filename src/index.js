// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// window.test = () => {
//     console.log('test')
//  }

window.makeImage = () => {
    // console.log(fileName.value);
    fileNameValue = fileName.value ? fileName.value : 'no_name';
    const nodes = document.querySelectorAll('#js-image');
    nodes.forEach((node, index) => {
        htmlToImage.toPng(node, { cacheBust: true, })
            .then(function (dataUrl) {
                const link = document.createElement('a')
                link.download = `${fileNameValue}_${index + 1}.png`;
                link.href = dataUrl
                link.click()
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    });
}