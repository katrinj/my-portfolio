import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor() { }

  private timeLineData_et = [
    {
      year: "2023 - 2024",
      company: "Webhelp OÜ / Concentrix Estonia OÜ",
      role: "Andmesisestaja",
      remark: "täiskohaga kaugtöö",
      type: "work"
    },
    {
      year: "2022 - 2023",
      company: "Tartu Kunstikool",
      role: "Koolitaja",
      subject: "3D kursused algajatele",
      remark: "õpilaste ja täiskasvanute rühmad",
      type: "work"
    },    
    {
      year: "2020 - 2023",
      company: "Tartu Kunstikool",
      role: "3D-kunstnik-kujundaja", 
      remark: "4. taseme kutsetunnistus",
      type: "school"
    },
    {
      year: "2018 - 2021",
      company: "Luisa Tõlkebüroo OÜ",
      role: "Tõlkija",
      subject: "ENG → EST", 
      remark: "projektipõhine kaugtöö",
      type: "work"
    },
    {
      year: "2017 - 2020",
      company: "Tartu Ülikool",
      role: "Tõlkeõpetus", 
      subject: "ENG ↔ EST; DEU → EST",
      remark: "MA (cum laude)",
      type: "school"
    },
    {
      year: "2015 - 2020",
      company: "Playtech Estonia OÜ",
      role: "Tarkvaraarendaja",
      subject: "Java", 
      remark: "vahelduva koormusega töö enamasti kontoris",
      type: "work"
    },
    {
      year: "2008 - 2013",
      company: "Tartu Ülikool",
      role: "Informaatika",
      subject: "Keeletehnoloogia",
      remark: "MSc",
      type: "school"
    },
    {
      year: "2007 - 2008",
      company: "Aktors OÜ",
      role: "Tarkvaraarendaja",
      subject: "Java", 
      remark: "poole koormusega töö enamasti kontoris",
      type: "work"
    },
    {
      year: "2004 - 2008",
      company: "Tartu Ülikool",
      role: "Infotehnoloogia",
      remark: "BSc",
      type: "school"
    }
  ];

  private timeLineData_en = [
    {
      year: "2023 - 2024",
      company: "Webhelp / Concentrix Estonia",
      role: "Data entry specialist",
      remark: "fulltime, remote",
      type: "work"
    },
    {
      year: "2022 - 2023",
      company: "Tartu Art School",
      role: "Instructor",
      subject: "3D courses for beginners",
      remark: "highschool student and adult groups",
      type: "work"
    },
    {
      year: "2020 - 2023",
      company: "Tartu Art School",
      role: "3D Designer", 
      remark: "occupational qualification: designer, level 4",
      type: "school"
    },
    {
      year: "2018 - 2021",
      company: "Luisa Translation Agency",
      role: "Translator",
      subject: "ENG → EST", 
      remark: "project based remote work",
      type: "work"
    },
    {
      year: "2017 - 2020",
      company: "Tartu University",
      role: "Translation studies", 
      subject: "ENG ↔ EST; DEU → EST",
      remark: "MA (cum laude)",
      type: "school"
    },
    {
      year: "2015 - 2020",
      company: "Playtech Estonia",
      role: "Software developer",
      subject: "Java", 
      remark: "varying workload, mainly in office",
      type: "work"
    },
    {
      year: "2008 - 2013",
      company: "Tartu University",
      role: "Computer science",
      subject: "Language technology",
      remark: "MSc",
      type: "school"
    },
    {
      year: "2007 - 2008",
      company: "Aktors",
      role: "Software developer",
      subject: "Java", 
      remark: "part time, mainly in office",
      type: "work"
    },
    {
      year: "2004 - 2008",
      company: "Tartu University",
      role: "Information technology",
      remark: "BSc",
      type: "school"
    }
  ];

  private programmingLanguages = ["Java", "Javascript", "Typescript", "HTML", "CSS", "SQL"];
  private helperSoftware = ["Angular", "Spring", "Docker", "Jenkins", "Git"];
  private artSoftware = ["Blender", "Krita", "Adobe Photoshop", "Adobe Illustrator"];

  private languages_et = [
    {
      name: "Eesti keel",
      state: "aktiivne",
      description: "Emakeel"
    },
    {
      name: "Inglise keel",
      state: "aktiivne",
      studies: "Õppinud üle 11 aasta",
      description: "Igapäevases kasutuses nii kõnes kui kirjas"
    },
    {
      name: "Saksa keel",
      state: "passiivne",
      studies: "Õppinud 8 aastat",
      description: "Võimeline teataval määral aru saama ja rääkima",
    },
    {
      name: "Jaapani keel",
      state: "passiivne",
      studies: "Õppinud 6 aastat",
      description: "Võimeline vähesel määral aru saama ja rääkima"
    }
  ];

  languages_en = [
    {
      name: "Estonian",
      state: "active",
      description: "Native tongue"
    },
    {
      name: "English",
      state: "active",
      studies: "Studied over 11 years",
      description: "In daily use both speaking and writing"
    },
    {
      name: "German",
      state: "passive",
      studies: "Studied 8 years",
      description: "Can understand to some extent, speak a little"
    },
    {
      name: "Japanese",
      state: "passive",
      studies: "Studied 6 years",
      description: "Can understand and speak a little"
    }
  ];

  private language_certificates = [
    {
      subject: "English",
      type: "CEFR C1",
      year: "2019"
    },
    {
      subject: "Japanese",
      type: "JLPT N3",
      year: "2011"
    }
  ];

  private tech_certificates = [
    {
      subject: "Java",
      type: "SE 8 OCA",
      year: "2016"
    },
    {
      subject: "Java",
      type: "SE 8 OCP",
      year: "2017"
    }
  ];

  getTimeLineItems(lang: string) {
    if (lang == "en") {
      return this.timeLineData_en;
    } else {
      return this.timeLineData_et;
    }
  }

  getProgrammingLanguages(): string[] {
    return this.programmingLanguages;
  }

  getHelperSoftware(): string[] {
    return this.helperSoftware;
  }

  getArtSoftware(): string[] {
    return this.artSoftware;
  }

  getLanguageItems(lang: string) {
    if (lang == "en") {
      return this.languages_en;
    } else {
      return this.languages_et;
    }
  }

  getTechCertificates() {
      return this.tech_certificates;
  }

  getLanguageCertificates() {
    return this.language_certificates;
  }

}
