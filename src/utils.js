// parkingData es lo que devuelve la API https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json
// se pega la respuesta aquí debido a que daba error de CORS en Chrome al intenter llamar a dicha API desde la aplicación
export const parkingData = JSON.parse(JSON.stringify(
    {
        "@context": {
            "c": "http://www.w3.org/2002/12/cal#",
            "dcterms": "http://purl.org/dc/terms/",
            "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
            "loc": "http://purl.org/ctic/infraestructuras/localizacion#",
            "org": "http://purl.org/ctic/infraestructuras/organizacion#",
            "vcard": "http://www.w3.org/2006/vcard/ns#",
            "schema": "https://schema.org/",
            "title": "vcard:fn",
            "id": "dcterms:identifier",
            "relation": "dcterms:relation",
            "references": "dcterms:references",
            "address": "vcard:adr",
            "area": "loc:barrio",
            "district": "loc:distrito",
            "locality": "vcard:locality",
            "postal-code": "vcard:postal-code",
            "street-address": "vcard:street-address",
            "location": "vcard:geo",
            "latitude": "geo:lat",
            "longitude": "geo:long",
            "organization": "vcard:org",
            "organization-desc": "dcterms:description",
            "accesibility": "org:accesibilidad",
            "services": "org:servicios",
            "schedule": "org:horario",
            "organization-name": "vcard:organization-name",
            "description": "c:summary",
            "link": "c:url",
            "uid": "c:uid",
            "dtstart": "c:dtstart",
            "dtend": "c:dtend",
            "time": "c:time",
            "excluded-days": "c:exdate",
            "event-location": "c:location",
            "free": "schema:free",
            "price": "c:resource",
            "recurrence": "c:rrule",
            "days": "c:byday",
            "frequency": "c:freq",
            "interval": "c:interval",
            "audience": "dc:audience"
        },
        "@graph": [

        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11483771-aparcamiento-disuasorio-aviacion-espanola.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "11483771",
            "title": "Aparcamiento disuasorio Aviación Española",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=1ec084bc6763c710VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Latina"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Latina/Barrio/LasAguilas"
                },
                "locality": "MADRID",
                "postal-code": "28024",
                "street-address": "CALLE FUENTE DE LIMA 5"
            },
            "location": {
                "latitude": 40.38323792632855,
                "longitude": -3.783621006318095
            },
            "organization": {
                "organization-desc": " Plazas:  para automóviles: 344 (de las cuales, 10 para coche eléctrico) para motocicletas: 25 para bicicletas: 10   Código del aparcamiento: 1024 Autobuses:      EMT:  Línea 17 (destino Pl. Mayor) y línea 39 (destino Pl. España)  EMT (Líneas nocturnas): N19     Metro:      Aviación Española (L10)",
                "accesibility": "1",
                "schedule": "Abierto 24 horas",
                "services": "",
                "organization-name": "Aparcamiento disuasorio Aviación Española"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/10489514-aparcamiento-disuasorio-estadio-metropolitano-sur-es-02b.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "10489514",
            "title": "Aparcamiento disuasorio Estadio Metropolitano Sur ES-02b",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=975b89a80c49e510VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/SanBlas-Canillejas"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/SanBlas-Canillejas/Barrio/Rosas"
                },
                "locality": "MADRID",
                "postal-code": "28022",
                "street-address": "AVENIDA ARCENTALES 37"
            },
            "location": {
                "latitude": 40.434154,
                "longitude": -3.598831
            },
            "organization": {
                "organization-desc": " Plazas:  para automóviles: 3011 para motocicletas: 61 ",
                "accesibility": "0",
                "schedule": "Horario de apertura de 6:00 h a 22:00 h los días laborables excepto los días de partido en el estadio Metropolitano",
                "services": "",
                "organization-name": "Aparcamiento disuasorio Estadio Metropolitano Sur ES-02b"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11413444-aparcamiento-disuasorio-fuente-mora.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "11413444",
            "title": "Aparcamiento disuasorio Fuente de la Mora",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=cbb3ed735e9f9710VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Hortaleza"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Hortaleza/Barrio/Valdefuentes"
                },
                "locality": "MADRID",
                "postal-code": "28050",
                "street-address": "AVENIDA MANOTERAS 1"
            },
            "location": {
                "latitude": 40.4844428688153,
                "longitude": -3.66450251273440
            },
            "organization": {
                "organization-desc": " Plazas:  para automóviles: 368 (de las cuales, 10 para coche eléctrico y 12 para coches adaptados PMR) para motocicletas: 35   Código del aparcamiento: 1626 Autobuses:     EMT:  150      Cercanias:      Estación de cercanias Fuente de la Mora C1, C10      Tranvía:      ML1",
                "accesibility": "1",
                "schedule": "Abierto 24 horas",
                "services": "",
                "organization-name": "Aparcamiento disuasorio Fuente de la Mora"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11544464-aparcamiento-disuasorio-islazul.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "11544464",
            "title": "Aparcamiento disuasorio Islazul",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=83bf252aa267d710VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Carabanchel"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Carabanchel/Barrio/Buenavista"
                },
                "locality": "MADRID",
                "postal-code": "28054",
                "street-address": "CALLE CALDERILLA 1"
            },
            "location": {
                "latitude": 40.36521668890186,
                "longitude": -3.737923481612698
            },
            "organization": {
                "organization-desc": " Número de plazas: 224 plazas  Código del aparcamiento: 1114 Autobuses:      EMT:  SE Plaza Elíptica &amp;ndash; Islazul, 118, E1, 35 y N16   EMT(Líneas nocturnas): N16      Metro:      La Peseta (L11)",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento disuasorio Islazul"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11413620-aparcamiento-disuasorio-pitis.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "11413620",
            "title": "Aparcamiento disuasorio Pitis",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=1642e9887f9f9710VgnVCM2000001f4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Fuencarral-ElPardo"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Fuencarral-ElPardo/Barrio/Fuentelarreina"
                },
                "locality": "MADRID",
                "postal-code": "28049",
                "street-address": "CALLE GLORIA FUERTES "
            },
            "location": {
                "latitude": 40.4941929509737,
                "longitude": -3.72723600089653
            },
            "organization": {
                "organization-desc": " Plazas:  para automóviles: 402 (de las cuales, 10 para coche eléctrico y 12 para coches adaptados PMR) para motocicletas: 34   Código del aparcamiento: 828 Autobuses:     EMT:  64, 82      Cercanias:      Estación de cercanias Pitis C3, C8      Metro:       Línea 7",
                "accesibility": "1",
                "schedule": "Abierto 24 horas",
                "services": "",
                "organization-name": "Aparcamiento disuasorio Pitis"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11544480-aparcamiento-mixto-alcantara.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "11544480",
            "title": "Aparcamiento mixto. Alcántara",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=79df252aa267d710VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Goya"
                },
                "locality": "MADRID",
                "postal-code": "28006",
                "street-address": "CALLE ALCANTARA 26"
            },
            "location": {
                "latitude": 40.428193768950756,
                "longitude": -3.673778093084516
            },
            "organization": {
                "organization-desc": " Plazas: 121 públicas y 254 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid   La EMT oferta plazas de estacionamiento, en régimen de alquiler de larga duración, con abonos de 1, 3 y 5 años en este aparcamiento. Más información:  http://www.emtmadrid.es/aparcamiento_agustin_lara/index.html ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Alcántara"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13470-aparcamiento-mixto-arquitecto-ribera.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13470",
            "title": "Aparcamiento mixto. Arquitecto Ribera",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=a50e15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Justicia"
                },
                "locality": "MADRID",
                "postal-code": "28004",
                "street-address": "CALLE BARCELO 2"
            },
            "location": {
                "latitude": 40.426273740022,
                "longitude": -3.70037418702346
            },
            "organization": {
                "organization-desc": " Plazas: 318 públicas y 298 para residentes Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Arquitecto Ribera"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/59060-aparcamiento-mixto-avenida-america-intercambiador-.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "59060",
            "title": "Aparcamiento mixto. Avenida de América (intercambiador)",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=3f3bc2c6e051c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin/Barrio/Prosperidad"
                },
                "locality": "MADRID",
                "postal-code": "28002",
                "street-address": "AVENIDA AMERICA 9"
            },
            "location": {
                "latitude": 40.4381779662151,
                "longitude": -3.67683406459837
            },
            "organization": {
                "organization-desc": " Información sobre accesibilidad:  Tiene escaleras adaptadas Ascensor de salida a la calle Avenida de América, 9 Tiene aseos accesibles Plazas para minusválidos    Plazas: 261 públicas y 395 para residentes  Abierto 24 horas   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Avenida de América (intercambiador)"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/5898885-aparcamiento-mixto-avenida-portugal.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "5898885",
            "title": "Aparcamiento mixto. Avenida de Portugal",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=c313e26f2b3fc210VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Latina"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Latina/Barrio/PuertaAngel"
                },
                "locality": "MADRID",
                "postal-code": "28011",
                "street-address": "AVENIDA PORTUGAL 155"
            },
            "location": {
                "latitude": 40.4112391063366,
                "longitude": -3.73808787568741
            },
            "organization": {
                "organization-desc": " Plazas: 428 públicas y 445 para residentes  Informacion sobre accesibilidad:  No tiene escalera adaptada Tiene ascensor de salida a Avenida de Portugal, s/n 1 aseo accesible (nivel-3) Plazas para minusválidos residentes: 20   Abierto 24 horas  Titularidad: Ayuntamiento de Madrid  Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "0",
                "schedule": "Horario de apertura de 6:00 h a 22:00 h los días laborables.",
                "services": "",
                "organization-name": "Aparcamiento mixto. Avenida de Portugal"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13475-aparcamiento-mixto-brasil.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13475",
            "title": "Aparcamiento mixto. Brasil",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=fb2e15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/CuatroCaminos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "CALLE SAN GERMAN 7"
            },
            "location": {
                "latitude": 40.4560925110791,
                "longitude": -3.69349688854822
            },
            "organization": {
                "organization-desc": " Plazas: 226 públicas y 402 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Brasil"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/183747-aparcamiento-mixto-casino-reina.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "183747",
            "title": "Aparcamiento mixto. Casino de la Reina",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=c5f4bdc85c01c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Embajadores"
                },
                "locality": "MADRID",
                "postal-code": "28005",
                "street-address": "CALLE CASINO 3"
            },
            "location": {
                "latitude": 40.40709468568204,
                "longitude": -3.7038875277131464
            },
            "organization": {
                "organization-desc": " Plazas: 135 públicas y 449 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Casino de la Reina"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13477-aparcamiento-mixto-condesa-gavia.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13477",
            "title": "Aparcamiento mixto. Condesa de Gavia",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=7e5f15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/CuatroCaminos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "PLAZA CONDESA DE GAVIA 2"
            },
            "location": {
                "latitude": 40.44905426535144,
                "longitude": -3.7020861495783635
            },
            "organization": {
                "organization-desc": " Plazas: 146 públicas y 79 para residentes  El horario de apertura para la parte del aparcamiento rotacional es de lunes a viernes de 9:00h a 20:40h. Sábados de 9:00 a 14:30h.  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Condesa de Gavia"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/81736-aparcamiento-mixto-corona-boreal.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "81736",
            "title": "Aparcamiento mixto. Corona Boreal",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=db8bc2c6e051c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca/Barrio/Aravaca"
                },
                "locality": "MADRID",
                "postal-code": "28023",
                "street-address": "CALLE PEREZ DE VICTORIA 2"
            },
            "location": {
                "latitude": 40.4588137783281,
                "longitude": -3.78414489510692
            },
            "organization": {
                "organization-desc": " Plazas: 125 públicas y 125 para residentes  Información sobre accesibilidad:  No tiene escaleras adaptadas Ascensor de salida a la calle Pérez de Victoria 2 aseos accesibles (1&amp;ordf; planta) Plazas para minusválidos residentes: 3    Abierto 24 horas   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Corona Boreal"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/183748-aparcamiento-mixto-daoiz-velarde.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "183748",
            "title": "Aparcamiento mixto. Daoíz y Velarde",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=0f85bdc85c01c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro/Barrio/Pacifico"
                },
                "locality": "MADRID",
                "postal-code": "28007",
                "street-address": "AVENIDA CIUDAD DE BARCELONA 156"
            },
            "location": {
                "latitude": 40.40255344121901,
                "longitude": -3.67763144165245
            },
            "organization": {
                "organization-desc": " Plazas: 235 públicas y 253 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Daoíz y Velarde"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/44724-aparcamiento-mixto-diaz-porlier.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "44724",
            "title": "Aparcamiento mixto. Díaz Porlier",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=9e69946be351c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Lista"
                },
                "locality": "MADRID",
                "postal-code": "28006",
                "street-address": "CALLE DIEGO DE LEON 64"
            },
            "location": {
                "latitude": 40.434510199279615,
                "longitude": -3.6754840133107027
            },
            "organization": {
                "organization-desc": " Plazas: 203 públicas y 421 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Díaz Porlier"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/36269-aparcamiento-mixto-encuentro.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "36269",
            "title": "Aparcamiento mixto. Encuentro",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=c3e12c798651c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moratalaz"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moratalaz/Barrio/MediaLegua"
                },
                "locality": "MADRID",
                "postal-code": "28030",
                "street-address": "PLAZA ENCUENTRO 5"
            },
            "location": {
                "latitude": 40.4058768185719,
                "longitude": -3.65138632197171
            },
            "organization": {
                "organization-desc": " Plazas: 104 públicas y 550 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Encuentro"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13464-aparcamiento-mixto-felipe-ii.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13464",
            "title": "Aparcamiento mixto. Felipe II",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=425e15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Goya"
                },
                "locality": "MADRID",
                "postal-code": "28009",
                "street-address": "AVENIDA FELIPE II 1"
            },
            "location": {
                "latitude": 40.4242207643363,
                "longitude": -3.67342185936768
            },
            "organization": {
                "organization-desc": " Plazas: 1175 públicas rotacionales y 615 para residentes  Información sobre accesibilidad:   No tiene escaleras adaptadas Ascensor de salida a la plaza de Felipe II Aseo accesible (1&amp;ordf; planta) Plazas para minusválidos residentes:23   Abierto 24 horas   Admite tarjeta BonoRed   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Felipe II"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/24809-aparcamiento-mixto-fernandez-shaw.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "24809",
            "title": "Aparcamiento mixto. Fernández Shaw",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=0e6e6545f951c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro/Barrio/Adelfas"
                },
                "locality": "MADRID",
                "postal-code": "28007",
                "street-address": "CALLE CARLOS Y GUILLERMO FERNANDEZ SHAW 1"
            },
            "location": {
                "latitude": 40.40489977502076,
                "longitude": -3.668850975462272
            },
            "organization": {
                "organization-desc": " Plazas: 245 públicas y 350 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Fernández Shaw"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13462-aparcamiento-mixto-fuencarral.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13462",
            "title": "Aparcamiento mixto. Fuencarral",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=987e15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamberi"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamberi/Barrio/Trafalgar"
                },
                "locality": "MADRID",
                "postal-code": "28010",
                "street-address": "CALLE FUENCARRAL 121"
            },
            "location": {
                "latitude": 40.4296270729669,
                "longitude": -3.70279096159205
            },
            "organization": {
                "organization-desc": " Plazas: 410 públicas y 111 para residentes  Información sobre accesibilidad:   No tiene escalera adaptada 1 ascensor con salida a la calle Fuencarral, 117 1 aseo accesible en la 1&amp;ordf; planta Plazas para minusválidos residentes: 7   Abierto 24 horas   Admite Tarjeta BonoRed   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Fuencarral"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/36270-aparcamiento-mixto-hernani.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "36270",
            "title": "Aparcamiento mixto. Hernani",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=d0712c798651c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/CuatroCaminos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "CALLE HERNANI 79"
            },
            "location": {
                "latitude": 40.44817621258857,
                "longitude": -3.6976113125092684
            },
            "organization": {
                "organization-desc": " Plazas: 115 públicas y 380 residentes  Información sobre accesibilidad:  No tiene escaleras adptadas Ascensor de salida a la calle Hernai, 68 1 aseo accesible en 1&amp;ordf; planta Plazas para minusválidos residentes. 3    Abierto 24 horas   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Hernani"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13459-aparcamiento-mixto-jacinto-benavente.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13459",
            "title": "Aparcamiento mixto. Jacinto Benavente",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=c48f15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Cortes"
                },
                "locality": "MADRID",
                "postal-code": "28012",
                "street-address": "PLAZA JACINTO BENAVENTE 6"
            },
            "location": {
                "latitude": 40.4144481124785,
                "longitude": -3.70332121750772
            },
            "organization": {
                "organization-desc": " Plazas: 285 públicas y 110 para residentes.  Plazas motos: 7.  Información sobre accesibilidad:   No tiene escaleras adaptadas Ascensor con salida a la calle Jacinto benavente, s/n 1 aseo accesible Plaza para minusválidos residentes: 16  Abierto 24 horas  Titularidad:  Ayuntamiento de Madrid   Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Jacinto Benavente"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13479-aparcamiento-mixto-jose-castan-tobenas.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13479",
            "title": "Aparcamiento mixto. José Castán Tobeñas",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=35ce15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/Castillejos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "CALLE POETA JOAN MARAGALL 57"
            },
            "location": {
                "latitude": 40.4645483266289,
                "longitude": -3.69157198480319
            },
            "organization": {
                "organization-desc": " Plazas: 226 públicas y 43 para residentes  Información sobre accesibilidad:  No tiene escaleras adaptadas No disponde ascensor No disponde de aseos accesible Plazas para minusválidos residentes: 5    Abierto 24 horas   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. José Castán Tobeñas"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/6143690-aparcamiento-mixto-marques-salamanca.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "6143690",
            "title": "Aparcamiento mixto. Marqués de Salamanca",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=cb5b1b2bb5b61310VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Castellana"
                },
                "locality": "MADRID",
                "postal-code": "28006",
                "street-address": "PLAZA MARQUES DE SALAMANCA "
            },
            "location": {
                "latitude": 40.4304997416021,
                "longitude": -3.67929374257782
            },
            "organization": {
                "organization-desc": " Plazas: 356 públicas y 70 para residentes  Información sobre accesibilidad:   No tiene escaleras adaptadas 1 ascensor en la salida a la plaza del Marqués de Salamanca 1 aseo accesible en 2&amp;ordf;  planta Plaza para minusválidos residentes: 14   Abierto 24 horas   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Marqués de Salamanca"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/182188-aparcamiento-mixto-miguel-yuste.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "182188",
            "title": "Aparcamiento mixto. Miguel Yuste",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=1c15bdc85c01c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/SanBlas-Canillejas"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/SanBlas-Canillejas/Barrio/Simancas"
                },
                "locality": "MADRID",
                "postal-code": "28037",
                "street-address": "CALLE MIGUEL YUSTE 64"
            },
            "location": {
                "latitude": 40.43429571608524,
                "longitude": -3.622514147448957
            },
            "organization": {
                "organization-desc": " Plazas: 168  públicas y 68 para residentes Abierto: 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Miguel Yuste"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13465-aparcamiento-mixto-montalban.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13465",
            "title": "Aparcamiento mixto. Montalbán",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=f0967339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro/Barrio/LosJeronimos"
                },
                "locality": "MADRID",
                "postal-code": "28014",
                "street-address": "CALLE MONTALBAN 4 S PLANTA OT AN"
            },
            "location": {
                "latitude": 40.4181859174944,
                "longitude": -3.69095813503217
            },
            "organization": {
                "organization-desc": " Plazas:   146 Residenciales 130 Rotacionales    Abierto 24 horas    Titularidad:  Ayuntamiento de Madrid   Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Montalbán"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/5517342-aparcamiento-mixto-orense.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "5517342",
            "title": "Aparcamiento mixto. Orense",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=eee35ed15bb95210VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/CuatroCaminos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "AVENIDA BRASIL 2"
            },
            "location": {
                "latitude": 40.4530722916738,
                "longitude": -3.6941384720253
            },
            "organization": {
                "organization-desc": " Plazas: 129 públicas y 663 para residentes  Información sobre accesibilidad:  1 escalera adaptada No dispone de ascensor 1 aseo accesible Plaza para minusválidos residentes: 5    Abierto 24 horas   Titularidad: Ayuntamiento de Madrid  Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Orense"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/52114-aparcamiento-mixto-pedro-zerolo-antes-denominado-vazquez-mella-.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "52114",
            "title": "Aparcamiento mixto. Pedro Zerolo 'antes denominado Vázquez de Mella'",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=e499946be351c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Justicia"
                },
                "locality": "MADRID",
                "postal-code": "28004",
                "street-address": "PLAZA PEDRO ZEROLO 1"
            },
            "location": {
                "latitude": 40.4208058791525,
                "longitude": -3.69930167470253
            },
            "organization": {
                "organization-desc": " Plazas: 107 públicas y 261 para residentes.  Plazas motos: 6.  Información sobre accesibilidad:  No tiene escaleras adaptadas 1 ascensor con salida a la Plaza de Vazquez de Mella 1 aseo accesible Plaza para minusválidos residentes: 7    Abierto 24 horas   Titularidad: Ayuntamiento de Madrid  Gestión: Empresa Municipal de Transportes (EMT) (más información)  Teléfonos: Residentes - 91 522 50 29          Rotacional -  91 532 19 10 ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Pedro Zerolo 'antes denominado Vázquez de Mella'"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/33440-aparcamiento-mixto-plaza-oriente.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "33440",
            "title": "Aparcamiento mixto. Plaza de Oriente",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=7db12c798651c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Palacio"
                },
                "locality": "MADRID",
                "postal-code": "28013",
                "street-address": "PLAZA ORIENTE 9"
            },
            "location": {
                "latitude": 40.41840695632423,
                "longitude": -3.7119903936183274
            },
            "organization": {
                "organization-desc": " Plazas: 242 públicas rotacionales (30 plazas para autobuses) y 511 para residentes Abierto 24 horas Admite Tarjeta BonoRed Este PAR está adherido a la zona de APR  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Plaza de Oriente"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11544439-aparcamiento-mixto-plaza-santo-domingo.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "11544439",
            "title": "Aparcamiento mixto. Plaza de Santo Domingo",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=58ec252aa267d710VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Palacio"
                },
                "locality": "MADRID",
                "postal-code": "28013",
                "street-address": "PLAZA SANTO DOMINGO "
            },
            "location": {
                "latitude": 40.42013315230386,
                "longitude": -3.7082597874437004
            },
            "organization": {
                "organization-desc": " Plazas Totales: 320 plazas,  Plazas motos: 16. ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Plaza de Santo Domingo"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13466-aparcamiento-mixto-plaza-mayor.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13466",
            "title": "Aparcamiento mixto. Plaza Mayor",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=2b1981eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Sol"
                },
                "locality": "MADRID",
                "postal-code": "28012",
                "street-address": "PLAZA MAYOR 1 PLANTA -1 01"
            },
            "location": {
                "latitude": 40.4158677606471,
                "longitude": -3.70689561392158
            },
            "organization": {
                "organization-desc": " Plazas: 694  279 Residenciales 415 Rotacionales  Abierto 24 horas  Titularidad : Ayuntamiento de Madrid    Gálibo: 185 m ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Plaza Mayor"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/36271-aparcamiento-mixto-presidente-carmona.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "36271",
            "title": "Aparcamiento mixto. Presidente Carmona",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=8a412c798651c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/CuatroCaminos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "AVENIDA GENERAL PERON 21"
            },
            "location": {
                "latitude": 40.45251614668263,
                "longitude": -3.6956837947248724
            },
            "organization": {
                "organization-desc": " Plazas: 127 públicas y 379 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid  Teléfono: 91 556 62 26 ",
                "accesibility": "0",
                "schedule": "De lunes a domingo servicio ininterrumpido",
                "services": "",
                "organization-name": "Aparcamiento mixto. Presidente Carmona"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13476-aparcamiento-mixto-recoletos-cerrado-.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13476",
            "title": "Aparcamiento mixto. Recoletos (cerrado)",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=283f15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
                },
                "locality": "MADRID",
                "postal-code": "28001",
                "street-address": "PASEO RECOLETOS 4"
            },
            "location": {
                "latitude": 40.421397488495096,
                "longitude": -3.691841269615146
            },
            "organization": {
                "organization-desc": " Plazas: 102 públicas y 289 para residentes  Información sobre accesibilidad:   No tiene escaleras adaptadas 1 ascensor en la salida al Paseo de Recoletos 1 aseo accesible Plaza para minusválidos residentes: 10   Abierto 24 horas   Titularidad : Ayuntamiento de Madrid   Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Recoletos (cerrado)"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/24193-aparcamiento-mixto-republica-dominicana.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "24193",
            "title": "Aparcamiento mixto. República Dominicana",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=aabe6545f951c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin/Barrio/NuevaEspana"
                },
                "locality": "MADRID",
                "postal-code": "28016",
                "street-address": "PLAZA REPUBLICA DOMINICANA 6"
            },
            "location": {
                "latitude": 40.4588693818589,
                "longitude": -3.67651579058803
            },
            "organization": {
                "organization-desc": " Plazas: 209 públicas y 892 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. República Dominicana"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/81828-aparcamiento-mixto-reyes-magos.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "81828",
            "title": "Aparcamiento mixto. Reyes Magos",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=0dfec2c6e051c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro/Barrio/NinoJesus"
                },
                "locality": "MADRID",
                "postal-code": "28007",
                "street-address": "PLAZA REYES MAGOS "
            },
            "location": {
                "latitude": 40.408797321706984,
                "longitude": -3.6763215894089827
            },
            "organization": {
                "organization-desc": " Plazas: 356 públicas y 345 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Reyes Magos"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/167692-aparcamiento-mixto-san-cayetano.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "167692",
            "title": "Aparcamiento mixto. San Cayetano",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=a284ff632081c010VgnVCM1000000b205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Guindalera"
                },
                "locality": "MADRID",
                "postal-code": "28028",
                "street-address": "PLAZA SAN CAYETANO 1"
            },
            "location": {
                "latitude": 40.4344244682971,
                "longitude": -3.67012877493573
            },
            "organization": {
                "organization-desc": " Plazas: 222 públicas y 261 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. San Cayetano"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13515-aparcamiento-mixto-san-german-ii-antes-general-yague-.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13515",
            "title": "Aparcamiento mixto. San Germán II (antes General Yagüe)",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=ee9e15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/Castillejos"
                },
                "locality": "MADRID",
                "postal-code": "28020",
                "street-address": "CALLE ORENSE 48"
            },
            "location": {
                "latitude": 40.4564090502234,
                "longitude": -3.69333344796644
            },
            "organization": {
                "organization-desc": " Plazas: 419 públicas y 713 residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. San Germán II (antes General Yagüe)"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/19053-aparcamiento-mixto-sanchez-bustillo.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "19053",
            "title": "Aparcamiento mixto. Sánchez Bustillo",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=27912c798651c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Embajadores"
                },
                "locality": "MADRID",
                "postal-code": "28012",
                "street-address": "CALLE SANCHEZ BUSTILLO "
            },
            "location": {
                "latitude": 40.40885884341386,
                "longitude": -3.693821482712085
            },
            "organization": {
                "organization-desc": " Plazas: 131 públicas y 408 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Sánchez Bustillo"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/7416748-aparcamiento-mixto-serrano-i.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "7416748",
            "title": "Aparcamiento mixto. Serrano I",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=bd61f94ae1d15410VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Castellana"
                },
                "locality": "MADRID",
                "postal-code": "28006",
                "street-address": "CALLE SERRANO 84"
            },
            "location": {
                "latitude": 40.4329452991722,
                "longitude": -3.68611338542774
            },
            "organization": {
                "organization-desc": " Plazas: 307 públicas y 833 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Serrano I"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/7417028-aparcamiento-mixto-serrano-ii.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "7417028",
            "title": "Aparcamiento mixto. Serrano II",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=bc096f1c35d15410VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
                },
                "locality": "MADRID",
                "postal-code": "28001",
                "street-address": "CALLE SERRANO 44"
            },
            "location": {
                "latitude": 40.4303442290635,
                "longitude": -3.68850808858792
            },
            "organization": {
                "organization-desc": " Plazas: 379 públicas y 804 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Serrano II"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/7417052-aparcamiento-mixto-serrano-iii.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "7417052",
            "title": "Aparcamiento mixto. Serrano III",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=9a1c6f1c35d15410VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
                },
                "locality": "MADRID",
                "postal-code": "28001",
                "street-address": "CALLE SERRANO 2"
            },
            "location": {
                "latitude": 40.4244268291578,
                "longitude": -3.68965177313431
            },
            "organization": {
                "organization-desc": " Plazas: 261 públicas y 725 para residentes Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Serrano III"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13460-aparcamiento-mixto-sevilla.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13460",
            "title": "Aparcamiento mixto. Sevilla",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=9dd67339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Sol"
                },
                "locality": "MADRID",
                "postal-code": "28014",
                "street-address": "CALLE ALCALA 17"
            },
            "location": {
                "latitude": 40.41780383567921,
                "longitude": -3.6998082261071747
            },
            "organization": {
                "organization-desc": " Plazas: 649 públicas rotacionales y 74 para residentes Abierto 24 horas Admite Tarjeta BonoRed   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Sevilla"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13458-aparcamiento-mixto-velazquez-ayala.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13458",
            "title": "Aparcamiento mixto. Velázquez - Ayala",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=8bee15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
                },
                "locality": "MADRID",
                "postal-code": "28001",
                "street-address": "CALLE VELAZQUEZ 47"
            },
            "location": {
                "latitude": 40.4272702030791,
                "longitude": -3.68408892366904
            },
            "organization": {
                "organization-desc": " Plazas: 443 públicas y 230 para residentes Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Velázquez - Ayala"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13457-aparcamiento-mixto-velazquez-jorge-juan.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13457",
            "title": "Aparcamiento mixto. Velázquez - Jorge Juan",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=d11f15cbed51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
                },
                "locality": "MADRID",
                "postal-code": "28001",
                "street-address": "CALLE VELAZQUEZ 1"
            },
            "location": {
                "latitude": 40.4242991698907,
                "longitude": -3.68435762446743
            },
            "organization": {
                "organization-desc": " Plazas: 548 públicas y 395 para residentes Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Velázquez - Jorge Juan"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/183607-aparcamiento-mixto-verdaguer-garcia.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "183607",
            "title": "Aparcamiento mixto. Verdaguer y García",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=6245bdc85c01c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/CiudadLineal"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/CiudadLineal/Barrio/SanPascual"
                },
                "locality": "MADRID",
                "postal-code": "28027",
                "street-address": "CALLE VERDAGUER Y GARCIA 2"
            },
            "location": {
                "latitude": 40.4397163141475,
                "longitude": -3.6566922711780356
            },
            "organization": {
                "organization-desc": " Plazas: 83 públicas y 91 para residentes  Información sobre accesibilidad:  No tiene escaleras adaptadas 1 ascensor en la salida a la Calle Verdaguer y garcía 1 aseo accesible en la planta -1 Plaza para minusválidos residentes: 4    Abierto 24 horas   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento mixto. Verdaguer y García"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13452-aparcamiento-publico-almagro.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13452",
            "title": "Aparcamiento público. Almagro",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=0e167339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamberi"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamberi/Barrio/Almagro"
                },
                "locality": "MADRID",
                "postal-code": "28010",
                "street-address": "CALLE ALMAGRO 24"
            },
            "location": {
                "latitude": 40.4298019274054,
                "longitude": -3.69323812827144
            },
            "organization": {
                "organization-desc": " Plazas: 463  Informacion sobre accesibilidad:   1 escalera adaptada No tiene ascensor de salida a calle 1 aseo accesible Plazas para minusválidos residentes: 17  Abierto 24 horas  Titularidad : Ayuntamiento de Madrid   Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Almagro"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/7393089-aparcamiento-publico-auditorio-nacional-musica-principe-vergara-.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "7393089",
            "title": "Aparcamiento público. Auditorio Nacional de Música (Príncipe de Vergara)",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=ed88f25e040c4410VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin/Barrio/CiudadJardin"
                },
                "locality": "MADRID",
                "postal-code": "28002",
                "street-address": "CALLE CARTAGENA 178 PLANTA 0 01"
            },
            "location": {
                "latitude": 40.44429510303696,
                "longitude": -3.6776974842015506
            },
            "organization": {
                "organization-desc": " Plazas: 376 Abierto 24 horas Admite la Tarjeta Bono Red  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Auditorio Nacional de Música (Príncipe de Vergara)"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13473-aparcamiento-publico-descalzas.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13473",
            "title": "Aparcamiento público. Descalzas",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=98e77339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Sol"
                },
                "locality": "MADRID",
                "postal-code": "28013",
                "street-address": "PLAZA DESCALZAS 3"
            },
            "location": {
                "latitude": 40.41845756968,
                "longitude": -3.70704603703524
            },
            "organization": {
                "organization-desc": " Plazas: 400  Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Descalzas"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13478-aparcamiento-publico-glorieta-puerta-toledo.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13478",
            "title": "Aparcamiento público. Glorieta Puerta de Toledo",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=5f477339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Embajadores"
                },
                "locality": "MADRID",
                "postal-code": "28005",
                "street-address": "GLORIETA PUERTA DE TOLEDO "
            },
            "location": {
                "latitude": 40.407386591674,
                "longitude": -3.71001515747525
            },
            "organization": {
                "organization-desc": " Plazas: 240 Abierto 24 horas  Titularidad: Ayuntamiento de Madrid  Teléfonos: 91 365 49 32                    669 523 992 ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Glorieta Puerta de Toledo"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13467-aparcamiento-publico-cortes.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13467",
            "title": "Aparcamiento público. Las Cortes",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=42c77339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Cortes"
                },
                "locality": "MADRID",
                "postal-code": "28014",
                "street-address": "PLAZA CORTES 13"
            },
            "location": {
                "latitude": 40.41567209145918,
                "longitude": -3.695312097854121
            },
            "organization": {
                "organization-desc": " Plazas: 480 Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Las Cortes"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13449-aparcamiento-publico-luna-tudescos.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13449",
            "title": "Aparcamiento público. Luna - Tudescos",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=54467339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Universidad"
                },
                "locality": "MADRID",
                "postal-code": "28004",
                "street-address": "PLAZA SANTA MARIA SOLEDAD TORRES ACOSTA 2 PLANTA 0 02"
            },
            "location": {
                "latitude": 40.4216849699782,
                "longitude": -3.70568981924281
            },
            "organization": {
                "organization-desc": " Plazas: 481 Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Luna - Tudescos"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13469-aparcamiento-publico-marques-urquijo.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13469",
            "title": "Aparcamiento público. Marqués de Urquijo",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=aa667339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca/Barrio/Arguelles"
                },
                "locality": "MADRID",
                "postal-code": "28008",
                "street-address": "CALLE MARQUES DE URQUIJO "
            },
            "location": {
                "latitude": 40.4299040013269,
                "longitude": -3.71881499696004
            },
            "organization": {
                "organization-desc": " Plazas: 482 Abierto 24 horas Admite Tarjeta BonoRed ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Marqués de Urquijo"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13451-aparcamiento-publico-mostenses.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13451",
            "title": "Aparcamiento público. Mostenses",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=fe0881eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Universidad"
                },
                "locality": "MADRID",
                "postal-code": "28015",
                "street-address": "CALLE GARCIA MOLINAS 4"
            },
            "location": {
                "latitude": 40.4227275539507,
                "longitude": -3.70883461506948
            },
            "organization": {
                "organization-desc": " Plazas: 361  Información sobre accesibilidad:   No tiene escaleras adaptadas 1 ascensor 1 aseo accesible en 2&amp;ordf;  planta Plaza para minusválidos residentes: 16   Abierto 24 horas   Admite Tarjeta BonoRed    Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Mostenses"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/88141-aparcamiento-publico-museo-ciudad.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "88141",
            "title": "Aparcamiento público. Museo de la Ciudad",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=bdc7bdc85c01c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin/Barrio/CiudadJardin"
                },
                "locality": "MADRID",
                "postal-code": "28002",
                "street-address": "CALLE PRINCIPE DE VERGARA 134"
            },
            "location": {
                "latitude": 40.4442297702559,
                "longitude": -3.67765536310739
            },
            "organization": {
                "organization-desc": " Plazas: 147 Abierto 24 horas  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Museo de la Ciudad"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13450-aparcamiento-publico-olavide.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13450",
            "title": "Aparcamiento público. Olavide",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=453881eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamberi"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamberi/Barrio/Trafalgar"
                },
                "locality": "MADRID",
                "postal-code": "28010",
                "street-address": "PLAZA OLAVIDE 17 PLANTA -2 01"
            },
            "location": {
                "latitude": 40.432878498188,
                "longitude": -3.70103933152522
            },
            "organization": {
                "organization-desc": "No accesible desde sótano -1 Zona A Plazas: 397   Información sobre accesibilidad:   Disponde de escaleras adaptadas 1 ascensor en la salida a la Plaza de Olavide 1 aseo accesible en la 1&amp;ordf;  planta Plaza para minusválidos residentes: 8  Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Olavide"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13454-aparcamiento-publico-plaza-colon.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13454",
            "title": "Aparcamiento público. Plaza de Colón",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=a5777339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Recoletos"
                },
                "locality": "MADRID",
                "postal-code": "28001",
                "street-address": "CALLE GOYA 2"
            },
            "location": {
                "latitude": 40.4254346221439,
                "longitude": -3.6884680270103
            },
            "organization": {
                "organization-desc": " Plazas: 611 Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Plaza de Colón"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13463-aparcamiento-publico-plaza-espana.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosResidentes",
            "id": "13463",
            "title": "Aparcamiento público. Plaza de España",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=fb977339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Palacio"
                },
                "locality": "MADRID",
                "postal-code": "28008",
                "street-address": "PLAZA ESPAÑA 1"
            },
            "location": {
                "latitude": 40.4237811996075,
                "longitude": -3.71152321262521
            },
            "organization": {
                "organization-desc": " Plazas: 800 (hasta 535 abonados) Abierto 24 horas    Titularidad: Ayuntamiento de Madrid  Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Plaza de España"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13472-aparcamiento-publico-plaza-carmen-cerrado-.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13472",
            "title": "Aparcamiento público. Plaza del Carmen (cerrado)",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=8ec881eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Sol"
                },
                "locality": "MADRID",
                "postal-code": "28013",
                "street-address": "PLAZA CARMEN 10"
            },
            "location": {
                "latitude": 40.418722788943874,
                "longitude": -3.7030734062842345
            },
            "organization": {
                "organization-desc": " Plazas: 450  Información sobre accesibilidad:   No tiene escaleras adaptadas 1 ascensor 1 aseo accesible en  1&amp;ordf;  planta Plaza para minusválidos residentes: 7   Abierto 24 horas   Admite Tarjeta BonoRed   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Plaza del Carmen (cerrado)"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13474-aparcamiento-publico-plaza-rey.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13474",
            "title": "Aparcamiento público. Plaza del Rey",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=d4f881eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Justicia"
                },
                "locality": "MADRID",
                "postal-code": "28004",
                "street-address": "PLAZA REY 1"
            },
            "location": {
                "latitude": 40.4202104053746,
                "longitude": -3.69580666702734
            },
            "organization": {
                "organization-desc": " Plazas: 170  Información sobre accesibilidad:   Si tiene escaleras adaptadas 1 ascensor 3 aseos accesibles (uno por planta): 8 Plaza para minusválidos residentes: 16  Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Plaza del Rey"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/11750494-aparcamiento-publico-san-epifanio.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "11750494",
            "title": "Aparcamiento público. San Epifanio",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=dac3493077fc2810VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Arganzuela"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Arganzuela/Barrio/Imperial"
                },
                "locality": "MADRID",
                "postal-code": "28005",
                "street-address": "CALLE SAN EPIFANIO 9"
            },
            "location": {
                "latitude": 40.4005782139287,
                "longitude": -3.71933799002069
            },
            "organization": {
                "organization-desc": " Plazas: 501  Actualmente Cerrado     Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. San Epifanio"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13456-aparcamiento-publico-santa-ana.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13456",
            "title": "Aparcamiento público. Santa Ana",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=9b5881eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Cortes"
                },
                "locality": "MADRID",
                "postal-code": "28012",
                "street-address": "PLAZA SANTA ANA "
            },
            "location": {
                "latitude": 40.4145312089554,
                "longitude": -3.70056009896723
            },
            "organization": {
                "organization-desc": " Plazas: 325  Información sobre accesibilidad:   No tiene escaleras adaptadas 1 ascensor 1 aseo accesible en 1&amp;ordf; planta Plaza para minusválidos residentes: 6   Abierto 24 horas   Admite Tarjeta BonoRed   Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Santa Ana"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/10737574-aparcamiento-publico-usera.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "10737574",
            "title": "Aparcamiento público. Usera",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=ce8907e1fd534610VgnVCM1000001d4a900aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Usera"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Usera/Barrio/Moscardo"
                },
                "locality": "MADRID",
                "postal-code": "28026",
                "street-address": "CALLE AMPARO USERA 46"
            },
            "location": {
                "latitude": 40.38728599111143,
                "longitude": -3.7063081042559407
            },
            "organization": {
                "organization-desc": " Plazas: 36  Titularidad : Ayuntamiento de Madrid ",
                "accesibility": "0",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Usera"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13468-aparcamiento-publico-velazquez-juan-bravo.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13468",
            "title": "Aparcamiento público. Velázquez - Juan Bravo",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=e3077339ae51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Castellana"
                },
                "locality": "MADRID",
                "postal-code": "28006",
                "street-address": "CALLE VELAZQUEZ 88 T PLANTA OD 01"
            },
            "location": {
                "latitude": 40.4317523227148,
                "longitude": -3.68345337033197
            },
            "organization": {
                "organization-desc": " Plazas: 371 Abierto 24 horas Admite Tarjeta BonoRed  Titularidad: Ayuntamiento de Madrid ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Velázquez - Juan Bravo"
            }
        },
        {
            "@id": "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/13453-aparcamiento-publico-villa-paris.json",
            "@type": "https://datos.madrid.es/egob/kos/entidadesYorganismos/AparcamientosPublicos",
            "id": "13453",
            "title": "Aparcamiento público. Villa de París",
            "relation": "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=38a881eb5f51c010VgnVCM2000000c205a0aRCRD",
            "address": {
                "district": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro"
                },
                "area": {
                    "@id": "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Justicia"
                },
                "locality": "MADRID",
                "postal-code": "28004",
                "street-address": "PLAZA VILLA DE PARIS 1"
            },
            "location": {
                "latitude": 40.4251485828521,
                "longitude": -3.69239569495104
            },
            "organization": {
                "organization-desc": " Plazas rotación: 169  Plazas motos: 2   Información sobre accesibilidad:   No tiene escaleras adaptadas No disponde de ascensor 1 aseo accesible Plaza para minusválidos residentes: 13   Abierto 24 horas       Titularidad: Ayuntamiento de Madrid  Gestión: Empresa Municipal de Transportes (EMT) (más información) ",
                "accesibility": "1",
                "schedule": "",
                "services": "",
                "organization-name": "Aparcamiento público. Villa de París"
            }
        }
      ]
    }
    ))
