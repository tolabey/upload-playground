import * as React from 'react';
import './pdfUpload.scss';

interface IState {
    file: string,
}

export default class PictureUpload extends React.Component<{}, IState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            file: "",
        }
    }

    public handleFile() {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            // @ts-ignore
            const uploaded = e.target.files[0];
            if(uploaded) {
                this.setState({ file: URL.createObjectURL(uploaded) })
            }
        }
    }

    public render() {
        return (
            <div className="pdf">
                <input type="file" name="upload" accept="application/pdf,application/vnd.ms-excel" onChange={this.handleFile()} />
                {
                    this.state.file &&
                    <iframe src={this.state.file} width="800px" height="2100px" />
                }
            </div>
        )
    }
}