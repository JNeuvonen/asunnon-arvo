import React from 'react'
import AccordionWrapper from '../Accordion'
const FourthSection = () => {
  return (
    <section className="fourth-section" id="section4">
      <div className="fourth-section__content">
        <h6 className="fourth-section__content__header">
          USEIN KYSYTTYJÄ KYSYMYKSIÄ
        </h6>
        <div className="fourth-section__content__faq">
          <AccordionWrapper
            title={'Miten palvelu auttaa asuntoni myymisessä?'}
            text={
              'Meillä on pääsy kiinteistönvälittäjäliikkeiden tarjoamiin tietokantoihin joista voimme seurata toteutuneita asuntokauppoja sekä välityspalkkioita. Tietojen perusteella pystymme päättelemään kuinka yksittäiset kiinteistönvälittäjät suoriutuvat omissa toimeksiannoissaan että yleisesti heidän toimialueellaan verrattuna muihin toimijoihin. Näiden tietojen avulla kykenemme laittamaan alueenne kiinteistönvälittäjät tilastolliseen parhausjärjestykseen.'
            }
          />

          <AccordionWrapper
            title={'Miksi kilpailuttaa kiinteistönvälittäjä kauttamme?'}
            text={
              'Kilpailuttamalla kiinteistönvälittäjät kauttamme teidän on mahdollista säästää välityspalkkioista työn laadusta tinkimättä. Tämän lisäksi palvelumme säästää teille aikaa, koska me etsimme alueesi parhaimmmat kiinteistönvälittäjät teille ilmaiseksi. Täytettyänne lomakkeen voitte vain odotella kiinteistönvälittäjien yhteydenottoja.'
            }
          />
          <AccordionWrapper
            title={
              'Onko edullisin kiinteistönvälittäjä aina todella oikeasti edullisin?'
            }
            text={
              'Ei välttämättä. Ihmiset tekevät päätöksiä tunteilla ja taitavat kiinteistönvälittäjät osaavat herättää potentiaalisissa asunnonostajissa oikeat tunteet ostopäätöksen tekemiseen. Maksamalla enemmän ammattitaitoiselle välittäjälle saatat saada asunnon myytyä nopeammin ja paremmalla hinnalla.'
            }
          />
          <AccordionWrapper
            title={'Onko palvelu ilmainen?'}
            text={
              'Kyllä, palvelu on kuluttajille ilmainen. Liiketoimintamallimme perustuu kiinteistönvälitysliikkeiden maksamiin palkkioihin toteutuneista toimeksiannoista. '
            }
          />
          <AccordionWrapper
            title={'Miksi en tekisi vain samaa itse?'}
            text={
              'Toki pystyt etsimään hyvän välittäjän asunnollesi myös itse. Emme suosittele sitä koska kiinteistönvälittäjien kilpailutuspalvelut ovat ilmaisia ja me ainakin koemme tuovan asiakkallemme selkeää lisäarvoa.'
            }
          />
          <AccordionWrapper
            title={'Miten nopeasti kiinteistönvälittäjät ottavat yhteyttä?'}
            text={
              'Keskimääräinen yhteydenotto tapahtuu jo seuraavana päivänä kilpailutuksen aloituksesta.'
            }
          />
          <AccordionWrapper
            title={'Olenko sitoutunut johonkin kun kilpailutus on aloitettu?'}
            text={
              'Ette ole. Kilpailutuksen aloittamisen jälkeen voitte kuvitella kuin meitä ei olisi olemassakaan. Tarkoituksemme on vain yhdistää teidät alueesi parhaimpiin kiinteistönvälittäjiin mahdollisimman tehokkaalla tavalla. Se mitä tapahtuu kilpailutuksen jälkeen ei kuulu meille.'
            }
          />
          <AccordionWrapper
            title={'Onko teillä kokemusta alasta?'}
            text={'Suurin osa meistä on entisiä kiinteistöalan ammattilaisia.'}
          />
          <AccordionWrapper
            title={'Mitä jos en ole tyytyväinen kiinteistönvälittäjiin?'}
            text={
              'Ei se mitään, ette ole sitoutuneet mihinkään joten kieltäytymisessä ei ole mitään sen ihmeellisempää.'
            }
          />
          <AccordionWrapper
            title={
              'Onko palvelua mahdollista käyttää useita kertoja mikäli välittäjät eivät olleet mieluisia?'
            }
            text={'Kyllä, se on mahdollista.'}
          />
          <AccordionWrapper
            title={'En koskaan saanut kiinteistönvälittäjältä yhteydenottoa?'}
            text={
              'Jos yhteydenottoja ei ole saapunut kahden päivän jälkeen kilpailun aloittamisesta, teidän yhteystietonne ovat luultavasti syötetty väärin. Kokeilkaa täyttää lomake uudestaan.'
            }
          />
        </div>
      </div>
    </section>
  )
}
export default FourthSection
