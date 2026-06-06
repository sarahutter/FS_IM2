# WEARA — The Dressing Algorithm

## Team

- Sara Hutter

## Kurzbeschreibung

WEARA ist eine interaktive Webapplikation, die Nutzerinnen und Nutzern in unter 30 Sekunden eine personalisierte Outfit-Empfehlung für den Tag gibt. Die App kombiniert Echtzeit-Wetterdaten mit der persönlichen Stimmung und dem gewünschten Stil der nutzenden Person. Der gesamte Ablauf ist in drei Schritte gegliedert: Stimmung wählen, persönliche Daten eingeben, Outfit erhalten.

Das Projekt entstand im Rahmen des Moduls Interaktive Medien II (IM2). Ziel war es, eine vollständige, mehrseitige Webapplikation mit JavaScript zu entwickeln, die externe APIs einbindet und eine durchdachte Benutzerführung bietet.

## Funktionsweise

Der Nutzer oder die Nutzerin durchläuft drei Schritte:

1. **MOOD** - Wahl eines Stils (elegant, sportlich, casual)
2. **DATA** - Eingabe von Geschlecht, Standort und Ausflugsdauer
3. **OUTFIT** - Anzeige der personalisierten Outfit-Empfehlung mit Wetterdaten

Die Outfit-Empfehlung wird über die **Groq API** (Llama 3.3 70B) als KI-generierter Fliesstext ausgegeben. Als Fallback bei fehlender API-Verbindung greift die App auf eine eingebaute Outfit-Datenbank zurück, die Kleidungssets nach Wetterbedingung und Stil kombiniert.

## APIs & externe Dienste

- **Open-Meteo** — Echtzeit-Wetterdaten (Temperatur, Regenwahrscheinlichkeit, UV-Index, Wind, Luftfeuchtigkeit)
- **Open-Meteo Geocoding** — Stadtname → Koordinaten (Autocomplete-Suche)
- **Nominatim (OpenStreetMap)** — GPS-Koordinaten → Stadtname (für "Use current location")
- **Groq API** (llama-3.3-70b-versatile) — KI-generierter Outfit-Text auf Basis von Wetterdaten und Stil

## Learnings

Da ich vorher noch nie mit einer externen API gearbeitet hatte, war das der grösste Lernschritt im Projekt. Zu verstehen wie ein API-Request funktioniert, was zurückkommt und wie man mit Fehlern umgeht, hat einige Zeit gebraucht. Auch der Umgang mit async/await war neu für mich. Ausserdem habe ich gelernt, dass Funktionen die einfach klingen im Code deutlich mehr Aufwand bedeuten können. Die Zweisprachigkeit zum Beispiel habe ich am Anfang unteranderem auch stark unterschätzt.

## Schwierigkeiten

Die grösste Schwierigkeit war die Logik rund um die Ausflugsdauer. Es reichte nicht, nur die aktuelle Temperatur anzuzeigen, ich musste auch berechnen ob jemand bis in den Abend unterwegs ist und ob es dann kälter wird. Das habe ich mehrmals neu geschrieben bis es funktioniert hat. Auch das Responsive Design hat mehr Zeit gekostet als geplant, da die Seite auf verschiedenen Bildschirmgrössen immer wieder anders aussah als erwartet.

## Known Bugs / Einschränkungen

Das Kontaktformular sieht aus als würde es funktionieren, aber die Nachricht geht nirgendwo hin, dafür bräuchte man ein Backend, das ich nicht hatte.

## Ressourcen

- [Open-Meteo](https://open-meteo.com/) — Wetter-API
- [Groq](https://console.groq.com/) — KI-API
- [Google Fonts](https://fonts.google.com/) — Bebas
