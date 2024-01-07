import { Employee } from "./test-thirds";

export const EMPLOYEES: Employee[] = [
    {
        id: 0,
        employeeCode: 'PT-001000',
        salutation: 'Herr',
        title: '',
        firstName: 'Robby',
        lastName: 'Bleck',
        birthday: new Date(1980, 10, 5),
        selected: false,
        addresses: {
            primaryResidence: {
                street: 'Am Hartenberg',
                houseNumber: '64b',
                zip: '56377',
                city: 'Seelbach',
            },
            secondaryResidence: {
                street: 'Am Hartenberg',
                houseNumber: '64b',
                zip: '56377',
                city: 'Seelbach',
            }
        },
        contacts: {
            fon: '02604/45498877',
            mobile: '0166/1770863',
            email: 'rbleck@hoster.none',
        },
    },
    {
        id: 1,
        employeeCode: "PT-001001",
        salutation: "Herr",
        title: "",
        firstName: "Max",
        lastName: "Mustermann",
        birthday: new Date(1990, 5, 20),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Musterstraße",
            houseNumber: "123",
            zip: "98765",
            city: "Musterstadt"
          },
          secondaryResidence: {
            street: "Musterweg",
            houseNumber: "456",
            zip: "54321",
            city: "Teststadt"
          }
        },
        contacts: {
          fon: "01234/567890",
          mobile: "0176/98765432",
          email: "max.mustermann@example.com"
        }
    },
    {
        id: 2,
        employeeCode: "PT-001002",
        salutation: "Frau",
        title: "Dr.",
        firstName: "Anna",
        lastName: "Schmidt",
        birthday: new Date(1985, 8, 15),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Hauptweg",
            houseNumber: "7a",
            zip: "12345",
            city: "Stadtmitte"
          },
          secondaryResidence: {
            street: "Nebenstraße",
            houseNumber: "42",
            zip: "67890",
            city: "Ortschaft"
          }
        },
        contacts: {
          fon: "030/987654321",
          mobile: "0157/12345678",
          email: "anna.schmidt@example.com"
        }
    },
    {
        id: 3,
        employeeCode: "PT-001003",
        salutation: "Herr",
        title: "Prof.",
        firstName: "Michael",
        lastName: "Müller",
        birthday: new Date(1975, 3, 12),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Bergstraße",
            houseNumber: "55",
            zip: "87654",
            city: "Bergdorf"
          },
          secondaryResidence: {
            street: "Talweg",
            houseNumber: "21",
            zip: "34567",
            city: "Talstadt"
          }
        },
        contacts: {
          fon: "089/654321987",
          mobile: "0178/87654321",
          email: "michael.mueller@example.com"
        }
    },
    {
        id: 4,
        employeeCode: "PT-001004",
        salutation: "Frau",
        title: "",
        firstName: "Carolin",
        lastName: "Fischer",
        birthday: new Date(1988, 12, 3),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Seeweg",
            houseNumber: "10",
            zip: "98765",
            city: "Seestadt"
          },
          secondaryResidence: {
            street: "Bachgasse",
            houseNumber: "33",
            zip: "54321",
            city: "Bachstadt"
          }
        },
        contacts: {
          fon: "07123/4567890",
          mobile: "0163/78901234",
          email: "carolin.fischer@example.com"
        }
    },
    {
        id: 5,
        employeeCode: "PT-001005",
        salutation: "Herr",
        title: "Dipl.-Ing.",
        firstName: "Markus",
        lastName: "Schneider",
        birthday: new Date(1982, 7, 8),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Ingenieurweg",
            houseNumber: "15",
            zip: "76543",
            city: "Technostadt"
          },
          secondaryResidence: {
            street: "Technikerstraße",
            houseNumber: "99",
            zip: "12345",
            city: "Entwicklungsstadt"
          }
        },
        contacts: {
          fon: "0555/98765432",
          mobile: "0162/34567890",
          email: "markus.schneider@example.com"
        }
    },
    {
        id: 6,
        employeeCode: "PT-001006",
        salutation: "Frau",
        title: "",
        firstName: "Sophie",
        lastName: "Hofmann",
        birthday: new Date(1995, 2, 18),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Blumenweg",
            houseNumber: "7",
            zip: "87654",
            city: "Blumenstadt"
          },
          secondaryResidence: {
            street: "Sonnenallee",
            houseNumber: "23",
            zip: "34567",
            city: "Sonnenstadt"
          }
        },
        contacts: {
          fon: "07777/543210",
          mobile: "0171/87654321",
          email: "sophie.hofmann@example.com"
        }
    },
    {
        id: 7,
        employeeCode: "PT-001007",
        salutation: "Herr",
        title: "Mag.",
        firstName: "Dominik",
        lastName: "Wagner",
        birthday: new Date(1978, 11, 30),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Kulturstraße",
            houseNumber: "3",
            zip: "98765",
            city: "Kulturstadt"
          },
          secondaryResidence: {
            street: "Kunstgasse",
            houseNumber: "45",
            zip: "54321",
            city: "Kunststadt"
          }
        },
        contacts: {
          fon: "08888/12345678",
          mobile: "0155/87654321",
          email: "dominik.wagner@example.com"
        }
    },
    {
        id: 8,
        employeeCode: "PT-001008",
        salutation: "Frau",
        title: "Prof. Dr.",
        firstName: "Isabella",
        lastName: "Bauer",
        birthday: new Date(1986, 6, 25),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Universitätsplatz",
            houseNumber: "1",
            zip: "12345",
            city: "Uni-Stadt"
          },
          secondaryResidence: {
            street: "Lehrerweg",
            houseNumber: "77",
            zip: "67890",
            city: "Lehrstadt"
          }
        },
        contacts: {
          fon: "09999/87654321",
          mobile: "0169/12345678",
          email: "isabella.bauer@example.com"
        }
    },
    {
        id: 9,
        employeeCode: "PT-001009",
        salutation: "Herr",
        title: "",
        firstName: "Oliver",
        lastName: "Koch",
        birthday: new Date(1992, 4, 9),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Kochweg",
            houseNumber: "8",
            zip: "87654",
            city: "Kochstadt"
          },
          secondaryResidence: {
            street: "Genussstraße",
            houseNumber: "12",
            zip: "34567",
            city: "Genussstadt"
          }
        },
        contacts: {
          fon: "03333/98765432",
          mobile: "0172/87654321",
          email: "oliver.koch@example.com"
        }
    },
    {
        id: 10,
        employeeCode: "PT-001010",
        salutation: "Frau",
        title: "Ing.",
        firstName: "Eva",
        lastName: "Mayer",
        birthday: new Date(1989, 9, 14),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Ingenieurplatz",
            houseNumber: "5",
            zip: "98765",
            city: "Technostadt"
          },
          secondaryResidence: {
            street: "Entwicklergasse",
            houseNumber: "11",
            zip: "54321",
            city: "Entwicklungsstadt"
          }
        },
        contacts: {
          fon: "04444/76543210",
          mobile: "0168/32109876",
          email: "eva.mayer@example.com"
        }
    },
    {
        id: 11,
        employeeCode: "PT-001011",
        salutation: "Herr",
        title: "Dr.",
        firstName: "Felix",
        lastName: "Schulz",
        birthday: new Date(1983, 1, 22),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Wissenschaftsweg",
            houseNumber: "18",
            zip: "87654",
            city: "Wissenschaftsstadt"
          },
          secondaryResidence: {
            street: "Forscherstraße",
            houseNumber: "4",
            zip: "34567",
            city: "Forschungsstadt"
          }
        },
        contacts: {
          fon: "06666/87654321",
          mobile: "0173/98765432",
          email: "felix.schulz@example.com"
        }
    },
    {
        id: 12,
        employeeCode: "PT-001013",
        salutation: "Herr",
        title: "Dr.",
        firstName: "Sebastian",
        lastName: "Kramer",
        birthday: new Date(1981, 6, 15),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Forscherweg",
            houseNumber: "22",
            zip: "87654",
            city: "Forschungsstadt"
          },
          secondaryResidence: {
            street: "Wissenschaftsgasse",
            houseNumber: "8",
            zip: "34567",
            city: "Wissenschaftsstadt"
          }
        },
        contacts: {
          fon: "07777/87654321",
          mobile: "0171/98765432",
          email: "sebastian.kramer@example.com"
        }
    },
    {
        id: 13,
        employeeCode: "PT-001014",
        salutation: "Frau",
        title: "",
        firstName: "Julia",
        lastName: "Bergmann",
        birthday: new Date(1993, 9, 28),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Bergweg",
            houseNumber: "11",
            zip: "98765",
            city: "Bergstadt"
          },
          secondaryResidence: {
            street: "Talstraße",
            houseNumber: "44",
            zip: "54321",
            city: "Talstadt"
          }
        },
        contacts: {
          fon: "09999/76543210",
          mobile: "0169/32109876",
          email: "julia.bergmann@example.com"
        }
    },
    {
        id: 14,
        employeeCode: "PT-001015",
        salutation: "Herr",
        title: "Ing.",
        firstName: "Nico",
        lastName: "Hofmann",
        birthday: new Date(1987, 3, 7),
        selected: false,
        addresses: {
          primaryResidence: {
            street: "Ingenieurstraße",
            houseNumber: "9",
            zip: "87654",
            city: "Technostadt"
          },
          secondaryResidence: {
            street: "Technikweg",
            houseNumber: "33",
            zip: "34567",
            city: "Entwicklungsstadt"
          }
        },
        contacts: {
          fon: "03333/87654321",
          mobile: "0172/98765432",
          email: "nico.hofmann@example.com"
        }
    },
    {
      id: 15,
      employeeCode: "PT-001001",
      salutation: "Frau",
      title: "",
      firstName: "Petra",
      lastName: "Musterfrau",
      birthday: new Date(1990, 5, 20),
      selected: false,
      addresses: {
        primaryResidence: {
          street: "Musterstraße",
          houseNumber: "123",
          zip: "98765",
          city: "Musterstadt"
        },
        secondaryResidence: {
          street: "Musterweg",
          houseNumber: "456",
          zip: "54321",
          city: "Teststadt"
        }
      },
      contacts: {
        fon: "01234/567890",
        mobile: "0176/98765432",
        email: "max.mustermann@example.com"
      }
  },
];
