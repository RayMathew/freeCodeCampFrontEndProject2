import React from 'react';
import PropTypes from 'prop-types';


class Editor extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const classes = ['fa fa-arrows-alt', 'fa fa-compress', 'expand-button', 'restore-button'];
        return (
            <div id="editor-container" style={{height: 100+'%'}} className={this.props.editorClasses}>
                <div style={{color: 'white'}}>
                    <div style={{float: 'left', paddingLeft: 8+'px'}}>
                        Editor
                    </div>
                    <div style={{float: 'right'}}>
                        <div style={{width: 18+'px'}} className={classes[2]} onClick={this.props.maximiseEditor}>
                            <span className={classes[0]}></span>
                        </div>
                        <div style={{display: 'none', width: 29+'px'}} className={classes[3]} onClick={this.props.restoreViews}>
                            <span className={classes[1]}></span>
                        </div>
                    </div>
                </div>
                <div style={{height: 100+'%'}}>
                    <textarea id="editor"
                                onChange={this.props.onChange}
                                value={this.props.markdown}>
                    </textarea>
                </div>
            </div>
        );
    }
}

export default Editor;
