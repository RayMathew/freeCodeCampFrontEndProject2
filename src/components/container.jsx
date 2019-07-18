import React from 'react';
import PropTypes from 'prop-types';
import Editor from './editor';
import Preview from './preview';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            markdown: props.placeholder,
            editorMaximized: false,
            previewMaximized: false
        };
    }

    handleUserChange = (event) => {
        this.setState({
            markdown: event.target.value
        });
    }

    maximiseEditor = () => {
        const editorMaximized = this.state.editorMaximized;
        this.setState({
            editorMaximized: true,
            previewMaximized: false
        });
    }

    maximisePreview = () => {
        const previewMaximized = this.state.previewMaximized;
        this.setState({
            previewMaximized: true,
            editorMaximized: false
        });
    }

    restoreViews = () => {
        this.setState({
            previewMaximized: false,
            editorMaximized: false
        });
    }

    render () {
        const classes = this.state.editorMaximized? ['full-width editor-restore-button', 'hide']: this.state.previewMaximized? ['hide', 'full-width preview-restore-button']: ['normal-width','normal-width'];
        return (
            <div id="container">
                <div style={{height: 100+'%', float: 'left'}} className={classes[0]}>
                    <Editor onChange={this.handleUserChange}
                            markdown={this.state.markdown}
                            maximiseEditor={this.maximiseEditor}
                            restoreViews={this.restoreViews}
                            />
                </div>
                <div style={{height: 100+'%', float: 'right'}} className={classes[1]}>
                    <Preview renderer={this.props.renderer}
                            markdown={this.state.markdown}
                            maximisePreview={this.maximisePreview}
                            restoreViews={this.restoreViews}
                            />
                </div>
            </div>
        );
    }
}

export default Container;
