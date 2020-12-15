import React from 'react';
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import Label from "kds-react/build/cjs/components/Label/Label";
import Button from "kds-react/build/cjs/components/Button/Button";
import Text from "kds-react/build/cjs/components/Text/Text";
import Form from "kds-react/build/cjs/components/Form/Form"
import service from "../apis/service";
import Display from './display'


const option =[
    {value:"equals",label:"equals"},
    {value:"not equals",label:"not equals"},
    {value:"in",label:"in"},
    {value:"like",label:"like"},
    {value:"not like",label:"not like"},
    {value:"starts with",label:"starts with"},
    {value:"ends with",label:"ends with"},
    {value:"is defined",label:"is defined"},
    {value:"is not defined",label:"is not defined"}
]

class SearchCriteriaModified extends React.Component {
    componentDidMount() {
        const apiUrl = 'http://localhost:3000/resources/sampleResponse2.json';
        fetch(apiUrl)
          .then(response =>console.log(response));
      }
    constructor(props) {
        super(props);
        console.log("Props:: " + props)
        this.state = {
            publishedGtinValue: "", publishedGtinCriteria: "equals",
            innerPackGtinValue: "", innerPackGtinCriteria: "equals",
            svGtinValue: "", svGtinCriteria: "equals",
            hierarchyStatusValue: "", hierarchyStatusCriteria: "equals",
            roleUpdateDatetimeValue: "", roleUpdateDatetimeCriteria: "equals",
            venusImfNumberValue: "", venusImfNumberCriteria: "equals",
            venusReasonCodeValue: "", venusReasonCodeCriteria: "equals",
            val: ""
        }
    }

    onSubmit = async () => {

        let searchList = []

        if(this.state.publishedGtinValue !== ""){
            const publishedGtinObject = {
                queryField: "publishedGtin",
                queryValue: this.state.publishedGtinValue,
                searchCriteria: this.state.publishedGtinCriteria
            }
            searchList.push(publishedGtinObject)
        }

        if(this.state.innerPackGtinValue !== ""){
            const innerPackGtinObject = {
                queryField: "innerPackGtin",
                queryValue: this.state.innerPackGtinValue,
                searchCriteria: this.state.innerPackGtinCriteria
            }
            searchList.push(innerPackGtinObject)
        }

        if(this.state.svGtinValue !== ""){
            const svGtinObject = {
                queryField: "svGtin",
                queryValue: this.state.svGtinValue,
                searchCriteria: this.state.svGtinCriteria
            }
            searchList.push(svGtinObject)
        }

        if(this.state.hierarchyStatusValue !== ""){
            const hierarchyStatusObject = {
                queryField: "hierarchyStatus",
                queryValue: this.state.hierarchyStatusValue,
                searchCriteria: this.state.hierarchyStatusCriteria
            }
            searchList.push(hierarchyStatusObject)
        }

        if(this.state.roleUpdateDatetimeValue !== ""){
            const roleUpdateDatetimeObject = {
                queryField: "roleUpdateDatetime",
                queryValue: this.state.roleUpdateDatetimeValue,
                searchCriteria: this.state.roleUpdateDatetimeCriteria
            }
            searchList.push(roleUpdateDatetimeObject)
        }

        if(this.state.venusImfNumberValue !== ""){
            const venusImfNumberObject = {
                queryField: "venusImfNumber",
                queryValue: this.state.venusImfNumberValue,
                searchCriteria: this.state.venusImfNumberCriteria
            }
            searchList.push(venusImfNumberObject)
        }

        if(this.state.venusReasonCodeValue !== ""){
            const venusReasonCodeObject = {
                queryField: "venusReasonCode",
                queryValue: this.state.venusReasonCodeValue,
                searchCriteria: this.state.venusReasonCodeCriteria
            }
            searchList.push(venusReasonCodeObject)
        }

        const finalJson = {
            queries: searchList
        }

        console.log("Final Json:", JSON.stringify(finalJson))
        const response = await service.post('/hierarchyRoles', finalJson);
        console.log("Response Results:", response.data)
    };
 submittt = (e) => {
    this.setState({ val: e.target.value });
    }
    render() {
        let optionList = option.map((item, i) => {
            return (
                <option key={i} value={item.value}>{item.label}</option>
            )
        }, this);
        return (
            <div className="appTitle">

                <h3 className="text-default-900" >VIP Hierarchy Status Viewer</h3>
                <br/><br/><br/>
               <Text className="text-default-900" size="m" bold>Hierarchy Roles</Text>
                <br/>

                <Form className="criteria">
<div>
                    <div className="container">

                        <Label className="text-default-900" size="s">Published GTIN</Label>
                        <select className="text-default-900" type="search" name="operators1" id="operators1" value={this.state.publishedGtinCriteria}
                                onChange={e => this.setState({ publishedGtinCriteria: e.target.value })}>
                            {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.publishedGtinValue} onChange={e => this.setState({ publishedGtinValue: e.target.value })}/>

                        <Label className="text-default-900" size="s">Inner Pack Item ID</Label>
                        <select className="text-default-900" type="search" name="operators2" id="operators2" value={this.state.innerPackGtinCriteria}
                                onChange={e => this.setState({ innerPackGtinCriteria: e.target.value })}>
                            {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.innerPackGtinValue} onChange={e => this.setState({ innerPackGtinValue: e.target.value })}/>

                        <Label className="text-default-900" size="s">Sales Variant Item ID</Label>
                        <select className="text-default-900" type="search" name="operators1" id="operators1" value={this.state.svGtinCriteria}
                                onChange={e => this.setState({ svGtinCriteria: e.target.value })}>
                            {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.svGtinValue} onChange={e => this.setState({ svGtinValue: e.target.value })}/>


                        <Label className="text-default-900" size="s">Item Hierarchy Status</Label>
                        <select className="text-default-900" type="search" name="operators1" id="operators1" value={this.state.hierarchyStatusCriteria}
                                onChange={e => this.setState({ hierarchyStatusCriteria: e.target.value })}>
                            {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.hierarchyStatusValue} onChange={e => this.setState({ hierarchyStatusValue: e.target.value })}/>


                        <Label className="text-default-900" size="s">Role Update Date and Time</Label>
                        <select className="text-default-900" type="search" name="operators1" id="operators1" value={this.state.roleUpdateDatetimeCriteria}
                                onChange={e => this.setState({ roleUpdateDatetimeCriteria: e.target.value })}>
                           {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.roleUpdateDatetimeValue} onChange={e => this.setState({ roleUpdateDatetimeValue: e.target.value })}/>


                        <Label className="text-default-900" size="s">Venus IMF Number</Label>
                        <select className="text-default-900" type="search" name="operators1" id="operators1" value={this.state.venusImfNumberCriteria}
                                onChange={e => this.setState({ venusImfNumberCriteria: e.target.value })}>
                            {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.venusImfNumberValue} onChange={e => this.setState({ venusImfNumberValue: e.target.value })}/>

                        <Label className="text-default-900" size="s">Venus Reason Code</Label>
                        <select className="text-default-900" type="search" name="operators1" id="operators1" value={this.state.venusReasonCodeCriteria}
                                onChange={e => this.setState({ venusReasonCodeCriteria: e.target.value })}>
                           {optionList}
                        </select>
                        <input className="text-default-900" type="text" ref={this.state.venusReasonCodeValue} onChange={e => this.setState({ venusReasonCodeValue: e.target.value })}/>
                        <div className="history">
                        <Label className="text-default-900" size="s">Show History</Label>
                        <input className="text-default-900" type="checkbox" id="showHistory" name="showHistory"/>
                    </div></div>
<br/>
                    <div className="search" style={{height: "30px"}}>
                        <Button className="bg-brand-primary" compact type="submit" onClick={this.onSubmit}>Search</Button>
                        <Button className="bg-brand-primary" compact type="reset"> Clear</Button>
                    </div>
                    </div>
                    

                </Form>

                <Display/>
            </div>
        );
    }
}

export default SearchCriteriaModified;