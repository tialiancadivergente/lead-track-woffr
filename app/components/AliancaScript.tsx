import Script from "next/script";

export default function AliancaScript() {
  return (
    <Script
      id="alianca-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var head = document.head;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://hy.aliancadivergente.com.br/v1/lst/universal-script?ph=76173144eb3caf459268781a7628d524934186324c52a42d6e8dce0fd6982bcf&tag=!clicked&ref_url=" + encodeURI(document.URL);
            head.appendChild(script);
          })();
        `,
      }}
    />
  );
}

