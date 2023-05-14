import './App.css'

import { Fragment } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import {
  useQuery,
} from '@tanstack/react-query'

const  App= ()=> {
  const { isLoading, error, data } = useQuery({
    queryKey: ['results'],
    queryFn: () =>
      fetch('https://swapi.dev/api/people/').then(
        (res) => res.json(),
      ),
  })

  
  const columns = [
    {
        key: "_id",
        text: "#",
        className: "id",
        align: "left",
        sortable: true,
        cell:(row, index)=>index+1
    },
    {
        key: "name",
        text: "Name",
        className: "name",
        align: "left",
        sortable: true,
    },
   
  
    {
        key: "email",
        text: "Email",
        className: "email",
        align: "left",
        sortable: true
    },
   
    
      {
        key: "userBlock",
        text: "Status",
        className: "userBlock",
        align: "left",
        sortable: true,
         cell: record => {
            return (
                <Fragment>
                  {record.userBlock=="no"?"Active":"Block"}
                </Fragment>
            );
        }
    },
    {
        key: "date",
        text: "Date",
        className: "date",
        align: "left",
        sortable: true,
        cell: record => {
            return (
                <Fragment>
                  {/* {Moment(record.date).format('lll')} */}
                  Jassi
                </Fragment>
            );
        }
    },
    {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
            return (
                <Fragment>
                    <button
                     title="Edit"
                        data-toggle="modal"
                        data-target="#update-user-modal"
                        className="btn btn-primary btn-sm"
                        onClick={() => this.editRecord(record)}
                        style={{marginRight: '5px'}}>
                        <i className="fa fa-edit"></i>
                    </button>
                   
                    <button
                     title="Block"
                        className="btn btn-danger btn-sm"
                        onClick={() => this.blockRecord(record)}>
                        {record.userBlock ==='yes' && 
                        <i className='fa fa-ban'></i>
                        }
                         {record.userBlock ==='no' && 
                        <i className='fa fa-ban'></i>
                        }
                    </button>

                    <button
                    title="Send Password Regenerate Link"
                       
                        className="btn btn-primary btn-sm"
                        onClick={() => this.SendEmailForPasswordReset(record)}
                        style={{marginRight: '5px'}}>
                        <i className="fa fa-send"></i>
                    </button>
                    {/* <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.deleteRecord(record)}>
                        <i className="fa fa-trash"></i>
                    </button> */}
                </Fragment>
            );
        }
    }
];

const config = {
    page_size: 10,
    length_menu: [ 10, 20, 50 ],
    filename: "Users List",
    no_data_text: 'No user found!',
    button: {
      
        print: true,
        csv: true
    },
    language: {
        length_menu: "Show _MENU_ result per page",
        filter: "Filter in records...",
        info: "Showing _START_ to _END_ of _TOTAL_ records",
        pagination: {
            first: "First",
            previous: "Previous",
            next: "Next",
            last: "Last"
        }
    },
    show_length_menu: true,
    show_filter: true,
    show_pagination: true,
    show_info: true,
};
        
        const state = {
            records: [
              {
                "id": "55f14312c7447c3da7051b26",
                "address": "228 City Road",
                "name": ".CN Chinese",
                "postcode": "3JH",
                "rating": 5,
                "type_of_food": "Chinese"
              },
              {
                "id": "55f14312c7447c3da7051b27",
                "address": "376 Rayleigh Road",
                "name": "@ Thai",
                "postcode": "5PT",
                "rating": 5.5,
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b28",
                "address": "30 Greyhound Road Hammersmith",
                "name": "@ Thai Restaurant",
                "postcode": "8NX",
                "rating": 4.5,
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b29",
                "address": "30 Greyhound Road Hammersmith",
                "name": "@ Thai Restaurant",
                "postcode": "8NX",
                "rating": 4.5,
                "type_of_food": "Thai"
              }
            ]
        }
        const extraButtons =[
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
            },
            {
                className:"btn btn-primary buttons-pdf",
                title:"Export TEst",
                children:[
                    <span>
                    <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
                    </span>
                ],
                onClick:(event)=>{
                    console.log(event);
                },
                onDoubleClick:(event)=>{
                    console.log("doubleClick")
                }
            },
        ]
    

   const  editRecord=(record)=> {
        console.log("Edit Record", record);
    }

   const  deleteRecord=(record)=> {
        console.log("Delete Record", record);
    }

    
        return (
            <div>
                <ReactDatatable
                    config={config}
                    records={state.records}
                    columns={columns}
                    extraButtons={extraButtons}
                />
            </div>
        )
   
}
export default App;