import * as React from 'react';
import './pictureUpload.scss';

interface IState {
    files: string[],
}

export default class PictureUpload extends React.Component<{}, IState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            files: [],
        }
    }

    public handleFile() {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            // @ts-ignore
            const uploaded = e.target.files[0];
            if(uploaded) {
                this.setState({ files: [...this.state.files, URL.createObjectURL(uploaded)] })
            }
        }
    }

    public removePic(path: string) {
        return () => {
            const { files } = this.state;
            const filteredPic = files.filter((each) => each !== path);
            this.setState({files: filteredPic})
        }
    }

    public renderPics() {
        return (
            <div className="pic-wrapper">
                {this.state.files.map(each => {
                    console.log(each);
                    return (
                        <div className="one-item" key={each}>
                            <img src={ each } alt="" onClick={this.removePic(each)}/>
                        </div>
                    )
                })}
            </div>
        )
    }

    public render() {
        return (
            <div>
                <input type="file" id="input" accept="image/png, image/jpeg" multiple={true} onChange={this.handleFile()}/>
                { this.renderPics()}
            </div>
        )
    }
}