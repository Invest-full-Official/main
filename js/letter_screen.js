const textTpl = {
  title: "¡MUCHAS GRACIAS AL EQUIPO DE PLATFORM!",
  // cards: ["deposit-sponsor-1.svg", "deposit-sponsor-2.svg", "deposit-sponsor-3.svg", "sponsor-logo4.png", "deposit-sponsor-1.svg", "deposit-sponsor-2.svg", "deposit-sponsor-3.svg", "sponsor-logo4.png"],
  autor: 'ÁNGEL TUDELA',
  autorEmail: 'angel.tudela37@gmail.com',
  adress: 'A mí:',
  mainText: `Chicos, ¡muchas gracias! ¡Sois los mejores! ¡Creo que esta podría ser la única oportunidad de ganar dinero para una familia en estos días! ¡Nuestro gobierno está lleno de sinvergüenzas, de bárbaros! ¿Por qué no hacen nada para ayudar a los trabajadores duros como nosotros? ¡Esto no es una vida normal, sino un robo, los bancos, probablemente, se están apropiando de todos los fondos de ayuda! Hace tiempo perdí mi trabajo, y no había posibilidad de encontrar nada más rápidamente. Me quedé sentado en casa sin hacer nada durante algunos meses, pero hace un mes encontré vuestro proyecto. Ahora puedo al menos no estar nervioso y pasar suficiente tiempo con mis hijos. ¡¡Agradezco sinceramente a todo el equipo por darme esta oportunidad!!`,
  buttons: ['Responder', 'Reenviar']
};

const fileAddres = new URL(document.currentScript.src)
var arrParam = fileAddres.pathname.split('/');
var idx = arrParam.indexOf('prelands') + 1;

// base64 images instead of files
const letterIcons = 'data:image/png;base64,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',
  letterArrowDowm = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABPSURBVHgBbY3RCcAwCER74CBZJZt0U4uLNHuo2PghhCYHgt49OYjIDaBdB03/JXd/iIj/UEQMVe3Ig5nbCmVoZn1qoD4Kyr3CrTOhnNX7AOSIKCGAupohAAAAAElFTkSuQmCC',
  letterBtn1 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAOABADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9Ev2qv+C73izwj+3b4Qs/C/gvxNb/ALP37Ovizxxpfi3wNdE+HPFfxV8SXfg3xZ4FOpayl8g/s7SdA1DXY9a8PaVcKVnmsLfUZyXktyoB+7f7Df8AwUu/Zx/bx02+t/hnqt54d+IOiWa3/iD4ZeKvItvEtlZsyo9/pzRt9n1zTIZHSKe9sMiGVtssaqN5AKvxy/4Jm/s3fHP9p74VftP+JfB2hy+JvCMniix+I3h+60yG48P/ABZ0HW/AXinwxpC+I7IBEfXPDWuaxpOt2Gr/AOuli0w287O6wOADgPGn/BLP9nnwR8QvB/7R/wCzNokP7P8A8Y/hXrlt4rtpvCU13b+D/GmjWbI/ifwZ4v0PfOsul+K9DjvNIubu2Bms/tX2mCBpUUqAAP/Z',
  letterBtn2 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAOAA4DAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0b4m/8HDP7bXxS+G3xB+GWqeAP2bvD2mfEXwP4s8Cajr/AIR8K/FrSfFmh2Hi7Qb/AMP3eseGNVuPjXqFvpniHTLfUJL3RdQnsL6Gy1KC2uZbO5SNoXAP17/4JOf8FoNE+Nfge5+Dn7WGr3em/F/4deHor+w+JkOiavq1h8TfCdnd6fpH23xBbeHtO1C40zxxplxqGnw6rc/ZI9N8RQzjVY3ttQW+t5ADkvjZ/wAG6H7IXgv4M/Fzxj4D+KP7SNx458J/DHx74l8GQeLvG3wxl8JzeLNC8K6rqnh2LxPFo3wQtdYk8PSaxa2aa1HpV1bak+mm5WxnhujFIoB+p3/BOf8A4Jz/AAq/4J+/CpdB0FbTxZ8X/FlpZzfFb4rTWYiv/EF/EBMvh/w+swa40bwPo1wzjStKDia+mB1jWDNqEyragAD/2Q==',
  letterAvatar = `images/letterAvatar.jpg`;
// replace array (posible to add img as file)


const cssTpl = `#letter_screen{position:relative}#letter_screen>img{width:100%;height:440px;}.letter,.letter *{box-sizing:border-box}.letter{position:absolute;top:20px;left:20px;right:20px;bottom:20px;background-color:#fff;background-image:url(${letterIcons});background-repeat:no-repeat;background-position:99% 0;padding:20px 74px 30px 72px;display:flex;flex-direction:column;font-family:Roboto;margin:auto}h4.letter_title{font-size:19px;line-height:23px;font-weight:400;text-transform:uppercase;color:#222}.letter_autor-wrp{margin:30px 0 18px;position:relative}.letter_autor-wrp::before{content:'';position:absolute;display:block;background-image:url(${letterAvatar});background-size:cover;width:40px;height:40px;top:0;left:-56px}p.letter_autor{font-size:14px;line-height:17px;text-transform:uppercase;font-weight:700;color:#222}.letter_autor span{font-size:13px;line-height:15px;font-weight:400;text-transform:initial;color:#5f6368;}p.letter_adress{margin-top:5px;font-size:13px;line-height:15px;text-transform:lowercase;color:#5f6368}.letter_adress img{margin:0 0 2px 2px;display:initial}p.letter_main{font-size:13px;line-height:19px;color:#222;font-family:Arial,Helvetica,sans-serif}.letter_btn-wrp{margin-top:auto;display:flex}.letter_btn{border:1px solid #dadce0;box-sizing:border-box;border-radius:3px;padding:10px 20px;margin-right:10px;font-size:14px;line-height:16px;color:#5f6368;font-family:Arial,Helvetica,sans-serif;display:flex;align-items:center}.letter_btn img{margin-right:10px}@media (max-width:767px){#letter_screen>img{height:300px}.letter{padding:20px 40px;background-size:53px 44px}h4.letter_title{font-size:14px;line-height:18px}.letter_autor-wrp{margin:10px 0 5px}.letter_autor-wrp::before{width:20px;height:20px;top:0;left:-26px}p.letter_autor{font-size:12px;line-height:14px}.letter_autor span{font-size:10px;line-height:12px;font-weight:400}p.letter_adress{margin-top:5px;font-size:11px;line-height:13px}p.letter_main{font-size:10px;line-height:12px}.letter_btn{padding:5px 10px;margin-right:10px;font-size:10px;line-height:14px}}@media (max-width:459px){.letter{padding:10px 30px;background-size:53px 44px}h4.letter_title{font-size:11px;line-height:12px}.letter_autor-wrp{margin:10px 0 10px}.letter_autor-wrp::before{width:18px;height:18px;left:-26px}p.letter_autor{font-size:8px;line-height:8px}.letter_autor span{font-size:6px;line-height:6px}p.letter_adress{margin-top:3px;font-size:7px;line-height:7px}.letter_adress img{width:4px;margin:0}p.letter_main{font-size:10px;line-height:12px}.letter_btn{padding:5px 5px;font-size:9px;line-height:12px}.letter_btn img{margin-right:5px;width:10px}}@media (max-width:424px){#letter_screen>img{height:250px;}.letter{top:15px;left:15px;right:15px;bottom:15px}p.letter_main{font-size:9px;line-height:10px}.letter_btn{padding:3px 5px;font-size:7px;line-height:9px}}@media (max-width:414px){#letter_screen>img{height:220px;}p.letter_main{font-size:7px;line-height:8px}.letter_autor-wrp{margin:10px 0 5px}}`;
const htmlTpl = `<div class="letter"> <h4 class="letter_title">${textTpl.title}</h4> <div class="letter_autor-wrp"> <p class="letter_autor">${textTpl.autor} <span>&#60;${textTpl.autorEmail}&#62;</span></p><p class="letter_adress">${textTpl.adress} <img src="${letterArrowDowm}" alt=""></p></div><p class="letter_main">${textTpl.mainText}</p><div class="letter_btn-wrp"> <div class="letter_btn"><img src="${letterBtn1}" alt="">${textTpl.buttons[0]}</div><div class="letter_btn"><img src="${letterBtn2}" alt="">${textTpl.buttons[1]}</div></div></div>`;

const divEl = document.getElementById('letter_screen');

divEl.insertAdjacentHTML('beforeEnd', htmlTpl); //append html
const depEl = document.querySelector('#letter_screen .letter');
/*Append css*/
const styleSheetLetter = document.createElement("style");
styleSheetLetter.type = "text/css";
styleSheetLetter.innerText = cssTpl;
document.head.appendChild(styleSheetLetter);