# calcolo del prezzo del biglietto del treno

## Descrizione

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

_L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca._

## Processo

- chiedere numero chilometri
- chiedere età passeggero
- creare costante prezzo per kilometri
  - **se** l'utente è sotto i 18 anni
    - sconto del 20% sul totale
  - **se** l'utente è sopra i 65 anni
    - sconto del 40% sul totale
  - **altrimenti**
    - prezzo pieno
