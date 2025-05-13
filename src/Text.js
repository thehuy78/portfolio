
// import * as React from 'react';
// // import { Button, Column, FieldColumn, FieldData, FieldGrid, Form, InputDate, InputDropdown, InputMultiDropdown, InputNumber, InputPassword, InputText, TableGrid } from "hintu"
// import Form from "./lib/form/context/Form"
// import FieldData from "./lib/form/type/FieldData"
// import FieldGrid from "./lib/form/type/FieldGrid"
// import FieldColumn from "./lib/form/type/FieldColumn"
// import { InputText, InputNumber, InputDate, InputPassword, InputDropdown, InputMultiDropdown } from "./lib/form/component/InputComponent"
// import LoadingPage from "./lib/loading/LoadingPage.tsx"
// const dataSelect = [
//   {
//     name: "Huy",
//     id: 1
//   },
//   {
//     name: "Nhi",
//     id: 2
//   },
//   {
//     name: "Tu",
//     id: 3
//   }
// ]
// const dataSelect1 = [
//   {
//     name: "Viet",
//     id: 1
//   },
//   {
//     name: "Tan",
//     id: 2
//   },
//   {
//     name: "Mai",
//     id: 3
//   }
// ]
// const Text = () => {

//   return (
//     <div style={{ backgroundColor: "white" }}>

//       <Form

//         initialValues={{
//           product: []
//         }}
//         onSubmit={(dataItem) => {
//           console.log(dataItem);
//         }}
//         render={(dataContext) => {

//           return (
//             <div>
//               <FieldData component={InputText} suffix={"huy"} label='Data' name={"user"} validator={validator} />
//               <FieldData component={InputNumber} validator={validator} label='Price' prefix={<i className="fa-solid fa-house"></i>} name={"price"} />
//               <FieldData component={InputDate} hint={"Lon hon 1"} validator={validator} label='ETD' name={"etd"} />
//               <FieldData prefix={"hihi"} component={InputPassword} validator={validator} label='Password' name={"password"} />
//               <FieldData data={dataSelect} component={InputDropdown} validator={validator} label='Dropdown' name={"dropdown"} fieldRender='name' fieldItemKey='id' />
//               <FieldData data={dataSelect} component={InputMultiDropdown} validator={validator} label='Multi Dropdown' name={"multidropdown"} fieldRender='name' fieldItemKey='id' />
//               <FieldGrid name={"product"} validator={validatorGrid}>
//                 <FieldColumn width={300} data={({ record }) => {
//                   return record.quantity < 10 ? dataSelect : dataSelect1
//                 }} component={InputDropdown} validator={validator} label='Dropdown' name={"dropdown"} fieldRender='name' fieldItemKey='id' />
//                 <FieldColumn label='Quantity' name={"quantity"}
//                   component={({ record }) => {
//                     return record?.dropdown?.name === "Nhi" ? InputNumber : InputNumber
//                   }}
//                   validator={({ record }) => (value, record) => {
//                     if (record?.dropdown?.name !== "Nhi") {
//                       return validator1(value, record);
//                     } else {
//                       return;
//                     }
//                   }} />
//               </FieldGrid>
//               <button type='submit'>Ok</button>

//               <button type='button' onClick={() => {
//                 dataContext.handleChangeInitial("multidropdown", [dataSelect[1]])
//               }}>Change</button>
//               <button type='reset' onClick={dataContext.onReset}>Reset</button>
//             </div>
//           )
//         }}
//       />


//     </div>
//   );

// };

// export const elementP = (props) => {
//   return <p></p>
// }

// export default Text;
// const validator = (data, dataForm) => {
//   return data ? "" : "Must be"
// }
// const validator1 = (data, dataForm) => {
//   return data && data > 20 ? "" : "Must be 1"
// }
// const validatorGrid = (data, dataForm) => {
//   return data.length > 0 ? "" : "Must be"
// }


