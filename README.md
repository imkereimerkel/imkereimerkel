# Imkerei Merkel Website

Eine responsive, statische Website ohne Build-Schritt. Sie kann direkt mit Cloudflare Pages veröffentlicht werden.

Die Produktbilder stammen aus dem bereitgestellten Kundenmaterial; für Akazienhonig, Blütenhonig und Waldhonig werden die 500-g-Gläser verwendet. Das Keyvisual und das Jubiläumszeichen zum „Echten Deutschen Honig“ stammen aus den bereitgestellten PDFs. Die Königin im Logo basiert auf dem vom Kunden verlinkten Foto von [Apis Donau](https://apis-donau.com/de/wp-content/uploads/sites/6/2016/02/K%C3%BCnstlich-Besamte-Buckfast-K%C3%B6nigin.jpeg).

Die Gestaltungsüberarbeitung wurde mit der Anleitung [unslop](https://github.com/heydamir/unslop) von Damir Sokolovsky (CC BY 4.0) geprüft. Von [Astryx](https://github.com/meta/astryx) wurden passende Typografie-, Abstands- und Radienprinzipien übernommen; das React-/StyleX-Paket selbst ist nicht Teil der statischen Website.

## Cloudflare Pages

1. Dieses Projekt in ein GitHub-, GitLab- oder Bitbucket-Repository pushen.
2. In Cloudflare Pages das Repository verbinden.
3. Framework preset auf **None** setzen.
4. Build command leer lassen und als Build output directory `.` angeben.

Die Website besteht aus `index.html`, `styles.css`, `script.js` und `assets/`.

## Vor dem Livegang

- Impressum und Datenschutzhinweise ergänzen und verlinken.
- Die im Kundenflyer genannten Produktpreise und Automatenstandorte durch den Kunden bestätigen lassen.
- Prüfen, ob die verwendeten Produktfotos und Verbandszeichen für die Website freigegeben sind.
