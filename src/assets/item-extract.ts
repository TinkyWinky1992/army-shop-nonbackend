import image1 from './item/WhatsApp Image 2024-07-07 at 7.06.39 PM.jpeg'
import image2 from './item/WhatsApp Image 2024-07-07 at 7.06.40 PM (1).jpeg'
import image3 from './item/WhatsApp Image 2024-07-07 at 7.06.40 PM.jpeg'
import image4 from './item/WhatsApp Image 2024-07-07 at 7.06.41 PM (1).jpeg'
import image5 from './item/WhatsApp Image 2024-07-07 at 7.06.41 PM.jpeg'
import image6 from './item/WhatsApp Image 2024-07-07 at 7.06.42 PM (1).jpeg'
import image7 from './item/WhatsApp Image 2024-07-07 at 7.06.42 PM.jpeg'
import image8 from './item/WhatsApp Image 2024-07-07 at 7.06.43 PM (1).jpeg'
import image9 from './item/WhatsApp Image 2024-07-07 at 7.06.43 PM.jpeg'
import image10 from './item/WhatsApp Image 2024-07-07 at 7.06.44 PM.jpeg'
import image11 from './item/WhatsApp Image 2024-07-07 at 7.06.45 PM (1).jpeg'
import image13 from './item/WhatsApp Image 2024-07-07 at 7.06.46 PM (1).jpeg'
import image14 from './item/WhatsApp Image 2024-07-07 at 7.06.46 PM.jpeg'
import image15 from './item/WhatsApp Image 2024-07-07 at 7.06.47 PM (1).jpeg'
//import image16 from './item/WhatsApp Image 2024-07-07 at 7.06.47 PM.jpeg'
import image17 from './item/WhatsApp Image 2024-07-07 at 7.06.48 PM (1).jpeg'
import image18 from './item/WhatsApp Image 2024-07-07 at 7.06.48 PM.jpeg'
import image19 from './item/0c2d4d1f-56b1-46b0-98bf-3c2a1fd05439.jpg'

import imagepng2 from './itempng/im2.png'
import imagepng10 from './itempng/im10.png'
import imagepng11 from './itempng/im11.png'
import imagepng12 from './itempng/im12.png'
import imagepng13 from './itempng/im13.png'
import imagepng14 from './itempng/im14.png'
import imagepng15 from './itempng/im15.png'
import imagepng16 from './itempng/im16.png'
import imagepng17 from './itempng/im17.png'
import imagepng18 from './itempng/im18.png'
import imagepng3 from './itempng/im3.png'
import imagepng4 from './itempng/im4.png'
import imagepng5 from './itempng/im5.png'
import imagepng6 from './itempng/im6.png'
import imagepng7 from './itempng/im7.png'
import imagepng8 from './itempng/im8.png'
import imagepng9 from './itempng/im9.png'
import imagepng19 from './itempng/imgpng19.png'

import background from './b.jpg'
import secondbackground from './c.jpg'
import itembackground from './itempagebackground.jpg'
export const BackGround = background;
export const SecondBackGround = secondbackground;
export const itembg = itembackground;


export interface ItemListInterface {
    imgpng: string,
    img: string;
    details: string;
    name: string;
    price: string
      
}
export const ItemList:ItemListInterface[] = [
    {
      imgpng: imagepng10 as string,
      img: image1 as string,
      details: 'ווסט שייטת דור 3. עיצוב המבוסס על הדורות הקודמים (דור 1 ודור 2) המצליחים. הווסט קל משקל, מודולרי לחלוטין לתרחישים שבהם יש צורך בזריזות. בעל ריפוד פנימי משופר, אבזמי ה-Dou-lock לשחרור מהיר ורצועות כתף שטוחות לשליטה טובה יותר בנשק.',
      name: 'רצועה לנשק',
      price: '₪79'
    },
    {
      imgpng: imagepng14 as string,
      img: image2 as string,
      details: 'רצועה לנשק מרופדת איכותית מאוד עם אפשרות הקטנה והגדלה בקלות',
      name: 'ווסט שייטת דור 3',
      price: '₪1099'
    },
    {
      imgpng: imagepng18 as string,
      img: image3 as string,
      details: 'צרה ops רצועה לנשק של מרעום דולפין ',
      name: 'רצועה לנשק ',
      price: '₪155'
    },
    {
      imgpng: imagepng12 as string,
      img: image4 as string,
      details: 'פקל ירך של מרעום דולפין , יש הרבה מקום בפקל , רב שימושי .',
      name: 'פקל ירך ',
      price: '₪275'
    },
    {
      imgpng: imagepng6 as string,
      img: image5 as string,
      details: 'פונדות זוג המתאים לפלטות צד של 15•15',
      name: 'פונדה זוג לפלטות צד',
      price: '₪79'
    },
    {
      imgpng: imagepng8 as string,
      img: image6 as string,
      details: 'פונדה לח.ע מודולרית צבע ריינגר גרין',
      name: 'פונדה לח.ע',
      price: '₪45'
    },
    {
      imgpng: imagepng16 as string,
      img: image7 as string,
      details: 'armoury tech פאוץ אדמין המתחבר לווסט באמצעות רצועות מולי. יבוא אישי של חברת',
      name: 'פונדה אדמין ',
      price: '₪49'
    },
    {
      imgpng: imagepng9 as string,
      img: image8 as string,
      details: '.פנס לקדסה, מגיע עם 3 מצבי תאורה: אדום, ירוק ולבן. מתחבר למסילות של הקסדה'  ,
      name: 'פנס לקסדה',
      price: '₪99'
    },
    {
      imgpng: imagepng2 as string,
      img: image9 as string,
      details: 'פונדה לאקדח המתחברת לווסט באמצעות רצועות מולי',
      name: 'פונדה לאקדח ווסט',
      price: '₪45'
    },
    {
      imgpng: imagepng7 as string,
      img: image10 as string,
      details: 'חגורת טקטיות שליפה מהירה איכותית מאוד וחזקות , מגיע בצבע שחור/ירוק',
      name: 'חגורת טקטיות',
      price: '₪45'
    },
    {
      imgpng: imagepng13 as string, 
      img: image11 as string,
      details: 'Caa ידית אקטימל של חברת ',
      name: 'ידית אקטימל',
      price: '₪145'
    },
    {
      imgpng: imagepng3 as string,
      img: image13 as string,
      details: ' .איכותי מאוד , מתחבר באמצעות רצועות מולי ',
      name: ' מחסניות צבע ירוק פונדה לשלושה',
      price: '₪79'
    },
    {
      imgpng: imagepng4 as string,
      img: image14 as string,
      details: 'איכותית מאוד וחזקה kiro ידית אחיזה של חברת',
      name: 'ידית אחיזה',
      price: '₪109'
    },
    {
      imgpng: imagepng5 as string,
      img: image15 as string,
      details: '.צב לווסט מתחבר באמצעות רצועות איכותי מאוד מתאים לשלוקר ועוד שלל דברים',
      name: 'צב לווסט',
      price: '₪149'
    },

    {
        imgpng: imagepng11 as string,
        img: image1 as string,
        details: '  Armoury tech מגיע עם אפשרות ניתוק מהיר . הווסט מודולרי , מגיע ערום , של חברת  ',
        name: 'ווסט כרמל איכותי מאוד',
        price: '₪399'
    },

    {  
        imgpng: imagepng15 as string, 
        img: image17 as string,
        details: '.כיסוי קסדה עם פודה איכותי מתאים לשלל קסדות מתחבר בקלות',
        name: 'כיסוי קסדה עם פונדה',
        price: '₪79'
    },

    {
      imgpng: imagepng17 as string,
      img: image18 as string,
      details: '.פקל ירך לאקדח ,מתאים לשלל אקדחים נוח על הרגל',
      name: 'פקל ירך לאקדח',
      price: '₪59'
    },

    {
      imgpng: imagepng19 as string,
      img: image19 as string,
      details: '.גריפ למחסנית של רובה משפר אחיזה ונוח מאוד ',
      name: 'גריפ למחסנית',
      price: '₪29'
  }
]