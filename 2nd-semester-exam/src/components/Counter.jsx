// import Document, { Head, NextScript, Html, Main } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {

//   static async getInitialProps(ctx) {
 
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;
//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }

  
//   render() {
//     return (
//       <Html lang="en-US">
//         <Head>
//           <NextScript async src="https://rec.smartlook.com/recorder.js" />
//           <link rel="manifest" href="/manifest.json" />
//           <link rel="icon" type="image/x-icon" href="/icon.svg" />
//           <meta name="description" content="Bills Payment Made Easy"></meta>

//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//           <link
//             href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@700;900&display=swap"
//             rel="stylesheet"
//           ></link>
//           <script
//             async
//             src="https://www.googletagmanager.com/gtag/js?id=G-Y7XPRQKDP7" 
//           ></script>

//           <script charset="UTF-8" src="//web.webpushs.com/js/push/5f3451552b32d2f0862799b17e727462_1.js" async></script>
//           {/* <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               (function () {
//                 var options = {
//                     whatsapp: "+2348085732766", // WhatsApp number
//                     call_to_action: "Message us.", // Call to action
//                     position: "right", // Position may be 'right' or 'left'
//                 };
//                 var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
//                 var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
//                 s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
//                 var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
//             })();
//             `,
//             }}
//           /> */}
          
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());

//               gtag('config', 'G-42DFQG4MSP');
//             `,
//             }}
//           />

//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               window.smartlook||(function(d) {
//                 var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
//                 var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
//                 c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
//                 })(document);
//                 smartlook('init', 'd7a9ea5aa33dbe98f754539bf07c9dde76880878');
//             `,
//             }}
//           />

//          { <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//               (function(){
//               var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//               s1.async=true;
//               s1.src='https://embed.tawk.to/619bba2a6bb0760a4943c886/1fl44uebm';
//               s1.charset='UTF-8';
//               s1.setAttribute('crossorigin','*');
//               s0.parentNode.insertBefore(s1,s0);
//               })();
//               `,
//             }}
//           /> }
          
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//             https://docs.sentry.io/platforms/javascript/guides/react/?_ga=2.126932164.891676037.1644507607-1450748037.1644507607&_gac=1.152532171.1644507693.Cj0KCQiAjJOQBhCkARIsAEKMtO1UVPmJQdw1qDx_WzEtmaMdEeECQgrfhpOj2DZOsb9bo10egCntBfcaAslKEALw_wcB
//             `,
//             }}
//           />


// {/* <!-- Meta Pixel Code --> */}
//       <script 
//       dangerouslySetInnerHTML={{
//                     __html: `
                  
//           !function(f,b,e,v,n,t,s)
//           {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//           n.queue=[];t=b.createElement(e);t.async=!0;
//           t.src=v;s=b.getElementsByTagName(e)[0];
//           s.parentNode.insertBefore(t,s)}(window, document,'script',
//           'https://connect.facebook.net/en_US/fbevents.js');
//           fbq('init', '173546453275688');
//           fbq('track', 'PageView'); `,
//       }}
//       />
//      <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-5R6RQ3B');
//               `,
//             }}
//           />
//         </Head>
//         <body>
//         <noscript dangerouslySetInnerHTML={{
//               __html: `<img height="1" width="1" style="display:none"
//             src="https://www.facebook.com/tr?id=173546453275688&ev=PageView&noscript=1"
//             />`,
//             }}
//             />

//           <noscript dangerouslySetInnerHTML={{
//               __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5R6RQ3B"
//             height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
//           }}
//           />
//           <Main />
//         </body>
//       </Html>
//     );
//   }
// }