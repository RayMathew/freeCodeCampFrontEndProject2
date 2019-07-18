import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

class Preview extends React.Component {
    render () {
        const classes = ['fa fa-arrows-alt', 'fa fa-compress', 'expand-button', 'restore-button'];
        return (
            <div id="preview-container" style={{height: 100+ '%', overflow: 'hidden'}} className={this.props.previewClasses}>
                <div style={{color: 'white'}}>
                    <div style={{float: 'left'}}>
                        Preview
                    </div>
                    <div style={{float: 'right'}}>
                        <div style={{width: 15+'px'}} className={classes[2]} onClick={this.props.maximisePreview}>
                            <span className={classes[0]}></span>
                        </div>
                        <div style={{display: 'none', width: 22+'px'}} className={classes[3]} onClick={this.props.restoreViews}>
                            <span className={classes[1]}></span>
                        </div>
                    </div>
                </div>
                <div id='preview'
                    dangerouslySetInnerHTML={{__html: marked(this.props.markdown, { renderer: this.props.renderer })}} />
            </div>
        );
    }
}

export default Preview;
