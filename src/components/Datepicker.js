import React from 'react';
import mobiscroll from '@mobiscroll/react-lite';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: new Date()
        };
    }
    
    show = () => {
        this.external.instance.show();
    }
    
    setExternal = (comp) => {
        this.external = comp;
    }

    render () {
        return (
            <div className="mbsc-grid">
                <div className="mbsc-row">
                    <div className="mbsc-col-sm-12 mbsc-col-md-5">
                        <mobiscroll.Form>
                            <div className="mbsc-form-grid">
                                <mobiscroll.Calendar value={this.state.val} display="inline" type="hidden" />
                            </div>
                        </mobiscroll.Form>
                    </div>
                    <div className="mbsc-col-sm-12 mbsc-col-md-7">
                        <mobiscroll.Calendar value={this.state.val} headerText="{value}" display="bubble">
                        	<mobiscroll.Input inputStyle="box" labelStyle="stacked">Header text</mobiscroll.Input>
                        </mobiscroll.Calendar>
                        <div className="mbsc-note mbsc-note-primary mbsc-align-center">Use the calendar on any non-mobiscroll form field.</div>
                        <div className="mbsc-col-sm-12">
                            <label htmlFor="demo-calendar-non-form">Date</label>
                            <mobiscroll.Calendar value={this.state.val} display="bubble">
                                <input className="demo-non-form" />
                            </mobiscroll.Calendar>
                        </div>
                        <div className="mbsc-col-sm-12">
                            <div className="mbsc-row mbsc-align-items-end">
                                <div className="mbsc-col-9">
                                    <label htmlFor="demo-external">Show on button click only</label>
                                    <mobiscroll.Calendar
                                        display="bubble"
                                        ref={this.setExternal}
                                        value={this.state.val}
                                        showOnTap={false}
                                        showOnFocus={false}
                                    >
                                        <input id="demo-external" className="demo-non-form" />
                                    </mobiscroll.Calendar>
                                </div>
                                <div className="mbsc-col-3 external-container">
                                    <button onClick={this.show} className="external-button">Show</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

export default DatePicker;
