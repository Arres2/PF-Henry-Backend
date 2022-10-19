import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';

const initialRows = [
    {
	id: 1,
        "first_name": "Administrador",
        "last_name": "Prueba",
        "email": "izquierdowo@gmail.com",
        "password" : "Prueba.202210*",
        "phone": "414-233-4964",
        "address_line1": "Conj Resd Los Andes",
        "address_line2": "San Diego",
        "city": "Valencia",
        "state": "Carabobo",
        "postal_code": "2006",
        "country": "Venezuela",
        "is_admin": "true",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
        "created_date": "2022-10-06 14:41:18",
        "update_date": "2022-10-06 18:41:15",
        "destroyTime": "null"
    },
    {
	id: 2,
        "first_name": "Virginia",
        "last_name": "Flores",
        "email": "virginiamfloresp@gmail.com",
        "password" : "Prueba.202210*",
        "phone": "414-233-4964",
        "address_line1": "Conj Resd Los Andes",
        "address_line2": "San Diego",
        "city": "Valencia",
        "state": "Carabobo",
        "postal_code": "2006",
        "country": "Venezuela",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
        "created_date": "2022-10-06 14:41:18",
        "update_date": "2022-10-06 18:41:15",
        "destroyTime": "null"
    },
    {
	id: 3,
        "first_name": "Cliente",
        "last_name": "Prueba",
        "email": "sadyirapruebacl@gmail.com",
        "password" : "Inventado123",
        "phone": "310-214-9951",
        "address_line1": "6 Brentwood Place",
        "address_line2": "null",
        "city": "Los Angeles",
        "state": "California",
        "postal_code": "90045",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-28 22:41:18",
        "update_date": "2022-08-01 18:41:15",
        "destroyTime": "null"
    },
    {
	id: 4,
        "first_name": "Olia",
        "last_name": "Ekkel",
        "email": "oekkel0@tuttocitta.it",
        "phone": "310-214-9951",
        "address_line1": "6 Brentwood Place",
        "address_line2": "null",
        "city": "Los Angeles",
        "state": "California",
        "postal_code": "90045",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-28 22:41:18",
        "update_date": "2022-08-01 18:41:15",
        "destroyTime": "2022-08-04 18:41:15"
    },
    {
	id: 5,
        "first_name": "Joyan",
        "last_name": "McIlwrath",
        "email": "jmcilwrath1@mac.com",
        "phone": "765-464-6321",
        "address_line1": "8142 Doe Crossing Lane",
        "address_line2": "null",
        "city": "Lafayette",
        "state": "Indiana",
        "postal_code": "47905",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-28 14:14:02",
        "update_date": "2022-08-02 18:31:40",
        "destroyTime": "null"
    },
    {
	id: 6,
        "first_name": "Scotti",
        "last_name": "Cookley",
        "email": "scookley2@blog.com",
        "phone": "404-215-9272",
        "address_line1": "4 Arkansas Circle",
        "address_line2": "null",
        "city": "Lawrenceville",
        "state": "Georgia",
        "postal_code": "30045",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/147x100.png/cc0000/ffffff",
        "created_date": "2022-07-29 11:20:27",
        "update_date": "2022-08-01 04:56:51",
        "destroyTime": "null"
    },
    {
	id: 7,
        "first_name": "Eberhard",
        "last_name": "Mallall",
        "email": "emallall3@paypal.com",
        "phone": "404-767-4426",
        "address_line1": "917 Nobel Avenue",
        "address_line2": "null",
        "city": "Atlanta",
        "state": "Georgia",
        "postal_code": "30356",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/203x100.png/dddddd/000000",
        "created_date": "2022-07-28 16:13:08",
        "update_date": "2022-08-01 21:47:02",
        "destroyTime": "null"
    },
    {
	id: 8,
        "first_name": "Sharleen",
        "last_name": "Winchcombe",
        "email": "swinchcombe4@unblog.fr",
        "phone": "404-902-1122",
        "address_line1": "330 Birchwood Pass",
        "address_line2": "null",
        "city": "Atlanta",
        "state": "Georgia",
        "postal_code": "30328",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 11:00:00",
        "update_date": "2022-08-01 12:10:49",
        "destroyTime": "null"
    },
    {
	id: 9,
        "first_name": "Arlie",
        "last_name": "Menat",
        "email": "amenat5@ucla.edu",
        "phone": "202-894-8528",
        "address_line1": "15 Luster Park",
        "address_line2": "null",
        "city": "Washington",
        "state": "District of Columbia",
        "postal_code": "20546",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/168x100.png/ff4444/ffffff",
        "created_date": "2022-07-29 15:52:45",
        "update_date": "2022-08-02 19:11:10",
        "destroyTime": "null"
    },
    {
	id: 10,
        "first_name": "Ash",
        "last_name": "Hardwidge",
        "email": "ahardwidge6@epa.gov",
        "phone": "757-311-4114",
        "address_line1": "686 Welch Junction",
        "address_line2": "null",
        "city": "Norfolk",
        "state": "Virginia",
        "postal_code": "23551",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/238x100.png/ff4444/ffffff",
        "created_date": "2022-07-28 03:07:49",
        "update_date": "2022-08-01 12:17:39",
        "destroyTime": "null"
    },
    {
	id: 11,
        "first_name": "Katrina",
        "last_name": "Llewhellin",
        "email": "kllewhellin7@biglobe.ne.jp",
        "phone": "304-569-4631",
        "address_line1": "96058 Dottie Parkway",
        "address_line2": "null",
        "city": "Charleston",
        "state": "West Virginia",
        "postal_code": "25362",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/226x100.png/ff4444/ffffff",
        "created_date": "2022-07-29 16:31:01",
        "update_date": "2022-08-01 13:40:33",
        "destroyTime": "null"
    },
    {
	id: 12,
        "first_name": "Emory",
        "last_name": "Leser",
        "email": "eleser8@mediafire.com",
        "phone": "804-395-6435",
        "address_line1": "29 Novick Road",
        "address_line2": "null",
        "city": "Richmond",
        "state": "Virginia",
        "postal_code": "23220",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/226x100.png/ff4444/ffffff",
        "created_date": "2022-07-29 12:58:09",
        "update_date": "2022-08-01 04:05:49",
        "destroyTime": "null"
    },
    {
	id: 13,
        "first_name": "Vite",
        "last_name": "Benettolo",
        "email": "vbenettolo9@godaddy.com",
        "phone": "757-928-1334",
        "address_line1": "77 Debra Avenue",
        "address_line2": "null",
        "city": "Suffolk",
        "state": "Virginia",
        "postal_code": "23436",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/150x100.png/cc0000/ffffff",
        "created_date": "2022-07-28 10:15:17",
        "update_date": "2022-08-01 22:57:38",
        "destroyTime": "null"
    },
    {
	id: 14,
        "first_name": "Lincoln",
        "last_name": "Willcot",
        "email": "lwillcota@cornell.edu",
        "phone": "901-198-1301",
        "address_line1": "14 Barby Parkway",
        "address_line2": "null",
        "city": "Memphis",
        "state": "Tennessee",
        "postal_code": "38126",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/193x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 11:36:49",
        "update_date": "2022-08-02 12:08:44",
        "destroyTime": "null"
    },
    {
	id: 15,
        "first_name": "Delphine",
        "last_name": "Lulham",
        "email": "dlulhamb@seattletimes.com",
        "phone": "808-810-7805",
        "address_line1": "6 Brentwood Center",
        "address_line2": "null",
        "city": "Honolulu",
        "state": "Hawaii",
        "postal_code": "96815",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/209x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-28 05:13:58",
        "update_date": "2022-08-02 17:43:06",
        "destroyTime": "null"
    },
    {
	id: 16,
        "first_name": "Kacie",
        "last_name": "Squibbs",
        "email": "ksquibbsc@amazon.de",
        "phone": "405-583-4590",
        "address_line1": "204 Coleman Court",
        "address_line2": "null",
        "city": "Oklahoma City",
        "state": "Oklahoma",
        "postal_code": "73104",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/102x100.png/cc0000/ffffff",
        "created_date": "2022-07-28 02:30:51",
        "update_date": "2022-08-01 08:12:39",
        "destroyTime": "null"
    },
    {
	id: 17,
        "first_name": "Konstance",
        "last_name": "Plaistowe",
        "email": "kplaistowed@usgs.gov",
        "phone": "412-559-3136",
        "address_line1": "32 Spenser Crossing",
        "address_line2": "null",
        "city": "Pittsburgh",
        "state": "Pennsylvania",
        "postal_code": "15225",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 15:06:46",
        "update_date": "2022-08-02 05:17:59",
        "destroyTime": "null"
    },
    {
	id: 18,
        "first_name": "Dorolisa",
        "last_name": "Mazzei",
        "email": "dmazzeie@comsenz.com",
        "phone": "614-622-1006",
        "address_line1": "15172 Granby Court",
        "address_line2": "null",
        "city": "Columbus",
        "state": "Ohio",
        "postal_code": "43220",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/224x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-28 15:02:42",
        "update_date": "2022-08-02 04:43:30",
        "destroyTime": "null"
    },
    {
	id: 19,
        "first_name": "Mahalia",
        "last_name": "Greenman",
        "email": "mgreenmanf@last.fm",
        "phone": "678-582-1376",
        "address_line1": "16 Swallow Parkway",
        "address_line2": "null",
        "city": "Atlanta",
        "state": "Georgia",
        "postal_code": "30323",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/122x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 23:06:13",
        "update_date": "2022-08-02 12:57:53",
        "destroyTime": "null"
    },
    {
	id: 20,
        "first_name": "Tiffy",
        "last_name": "Sermin",
        "email": "tserming@blogtalkradio.com",
        "phone": "612-466-7708",
        "address_line1": "9 Almo Hill",
        "address_line2": "null",
        "city": "Minneapolis",
        "state": "Minnesota",
        "postal_code": "55470",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/229x100.png/dddddd/000000",
        "created_date": "2022-07-28 07:51:17",
        "update_date": "2022-08-02 06:00:50",
        "destroyTime": "null"
    },
    {
	id: 21,
        "first_name": "Allen",
        "last_name": "Deschlein",
        "email": "adeschleinh@yahoo.com",
        "phone": "513-554-3097",
        "address_line1": "05 Summer Ridge Place",
        "address_line2": "null",
        "city": "Cincinnati",
        "state": "Ohio",
        "postal_code": "45228",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/159x100.png/dddddd/000000",
        "created_date": "2022-07-29 07:21:21",
        "update_date": "2022-08-01 08:22:48",
        "destroyTime": "null"
    },
    {
	id: 22,
        "first_name": "Samaria",
        "last_name": "Towey",
        "email": "stoweyi@desdev.cn",
        "phone": "775-649-4902",
        "address_line1": "52696 Crownhardt Crossing",
        "address_line2": "null",
        "city": "Reno",
        "state": "Nevada",
        "postal_code": "89505",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/142x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 16:26:57",
        "update_date": "2022-08-01 23:59:04",
        "destroyTime": "null"
    },
    {
	id: 23,
        "first_name": "Cleve",
        "last_name": "Worsell",
        "email": "cworsellj@domainmarket.com",
        "phone": "217-490-4624",
        "address_line1": "7513 Magdeline Point",
        "address_line2": "null",
        "city": "Springfield",
        "state": "Illinois",
        "postal_code": "62764",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/199x100.png/cc0000/ffffff",
        "created_date": "2022-07-29 19:23:15",
        "update_date": "2022-08-01 12:43:19",
        "destroyTime": "null"
    },
    {
	id: 24,
        "first_name": "Seth",
        "last_name": "Weond",
        "email": "sweondk@biglobe.ne.jp",
        "phone": "404-979-5674",
        "address_line1": "8440 Mayfield Place",
        "address_line2": "null",
        "city": "Atlanta",
        "state": "Georgia",
        "postal_code": "30328",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/169x100.png/dddddd/000000",
        "created_date": "2022-07-28 17:51:04",
        "update_date": "2022-08-01 14:42:51",
        "destroyTime": "null"
    },
    {
	id: 25,
        "first_name": "Crista",
        "last_name": "Stetlye",
        "email": "cstetlyel@friendfeed.com",
        "phone": "817-195-5007",
        "address_line1": "71705 Kensington Crossing",
        "address_line2": "null",
        "city": "Fort Worth",
        "state": "Texas",
        "postal_code": "76129",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/158x100.png/cc0000/ffffff",
        "created_date": "2022-07-29 15:52:00",
        "update_date": "2022-08-02 16:00:19",
        "destroyTime": "null"
    },
    {
	id: 26,
        "first_name": "Milena",
        "last_name": "Hackworthy",
        "email": "mhackworthym@fda.gov",
        "phone": "212-544-4690",
        "address_line1": "4 Division Pass",
        "address_line2": "null",
        "city": "New York City",
        "state": "New York",
        "postal_code": "10131",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/164x100.png/cc0000/ffffff",
        "created_date": "2022-07-28 11:40:57",
        "update_date": "2022-08-02 06:01:02",
        "destroyTime": "null"
    },
    {
	id: 27,
        "first_name": "Else",
        "last_name": "Piccop",
        "email": "epiccopn@google.de",
        "phone": "864-533-0263",
        "address_line1": "1702 Burrows Plaza",
        "address_line2": "null",
        "city": "Anderson",
        "state": "South Carolina",
        "postal_code": "29625",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 22:31:12",
        "update_date": "2022-08-01 10:40:46",
        "destroyTime": "null"
    },
    {
	id: 28,
        "first_name": "Goldy",
        "last_name": "Twizell",
        "email": "gtwizello@loc.gov",
        "phone": "361-569-7946",
        "address_line1": "8058 Bartillon Point",
        "address_line2": "null",
        "city": "Corpus Christi",
        "state": "Texas",
        "postal_code": "78470",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/234x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 05:17:02",
        "update_date": "2022-08-02 06:12:19",
        "destroyTime": "null"
    },
    {
	id: 29,
        "first_name": "Lyn",
        "last_name": "Pavlata",
        "email": "lpavlatap@github.com",
        "phone": "813-522-0418",
        "address_line1": "51888 Warrior Circle",
        "address_line2": "null",
        "city": "Tampa",
        "state": "Florida",
        "postal_code": "33647",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/182x100.png/ff4444/ffffff",
        "created_date": "2022-07-28 11:08:27",
        "update_date": "2022-08-01 22:22:24",
        "destroyTime": "null"
    },
    {
	id: 30,
        "first_name": "Del",
        "last_name": "Marguerite",
        "email": "dmargueriteq@slideshare.net",
        "phone": "323-116-2359",
        "address_line1": "6403 Warbler Trail",
        "address_line2": "null",
        "city": "Los Angeles",
        "state": "California",
        "postal_code": "90065",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 09:49:42",
        "update_date": "2022-08-02 08:25:16",
        "destroyTime": "null"
    },
    {
	id: 31,
        "first_name": "Cyndia",
        "last_name": "Seaborne",
        "email": "cseaborner@youku.com",
        "phone": "512-559-3166",
        "address_line1": "29171 Fallview Center",
        "address_line2": "null",
        "city": "Austin",
        "state": "Texas",
        "postal_code": "78754",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 13:43:11",
        "update_date": "2022-08-02 14:55:00",
        "destroyTime": "null"
    },
    {
	id: 32,
        "first_name": "Farrel",
        "last_name": "Heintsch",
        "email": "fheintschs@github.com",
        "phone": "785-471-4064",
        "address_line1": "47 Evergreen Hill",
        "address_line2": "null",
        "city": "Topeka",
        "state": "Kansas",
        "postal_code": "66629",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-28 02:03:52",
        "update_date": "2022-08-01 04:01:37",
        "destroyTime": "null"
    },
    {
	id: 33,
        "first_name": "Moselle",
        "last_name": "Rimell",
        "email": "mrimellt@samsung.com",
        "phone": "785-704-1131",
        "address_line1": "65359 Kropf Point",
        "address_line2": "null",
        "city": "Topeka",
        "state": "Kansas",
        "postal_code": "66642",
        "country": "United States",
        "is_admin": "false",
	    "is_banned": "false",
        "photo": "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
        "created_date": "2022-07-29 16:02:57",
        "update_date": "2022-08-01 13:07:41",
        "destroyTime": "null"
    }
]

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, first_name: '', last_name: '', email: '', is_admin: '', is_banned: '', phone: '', address_line1: '', address_line2: '', country: '', state: '', city: '', postal_code: '', photo: '', created_date: '', update_date: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);   //  aca debe ir a una ruta a solicitar datos a la base de datos
  const [rowModesModel, setRowModesModel] = React.useState({});


  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    { field: 'id', headerName: 'User ID', width: 80, editable: false },
    { field: 'first_name', headerName: 'First Name', width: 180, editable: false },
    { field: 'last_name', headerName: 'Last Name', width: 180, editable: false },
    {
      field: 'email',
      headerName: 'email Address',
      width: 150,
      editable: false,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 80,
      editable: false,
    },
    {
      field: 'address_line1',
      headerName: 'Address Line 1',
      width: 100,
      editable: false,
    },
    {
      field: 'address_line2',
      headerName: 'Address Line 2',
      width: 100,
      editable: false,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 100,
      editable: false,
    },
    {
      field: 'state',
      headerName: 'State',
      width: 100,
      editable: false,
    },
    {
      field: 'city',
      headerName: 'City',
      width: 100,
      editable: false,
    },
    {
      field: 'postal_code',
      headerName: 'Postal Code',
      width: 100,
      editable: false,
    },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 100,
      editable: false,
    },
    {
      field: 'created_date',
      headerName: 'Date Created',
      type: 'date',
      width: 100,
      editable: false,
    },
    {
      field: 'update_date',
      headerName: 'Date Updated',
      type: 'date',
      width: 100,
      editable: false,
    },
    {
      field: 'is_admin',
      headerName: 'Admin?',
      type: 'singleSelect',
      valueOptions: ['true', 'false'],
      width: 80,
      editable: true,
    },
    {
      field: 'is_banned',
      headerName: 'Banned?',
      type: 'singleSelect',
      valueOptions: ['true', 'false'],
      width: 80,
      editable: true,
    },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGridPro
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}