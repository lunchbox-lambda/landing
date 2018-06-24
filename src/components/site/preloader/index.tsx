import './style.scss'
import * as React from 'react'

export class Preloader extends React.PureComponent {

  // TODO:
  // $(window).on('load', function() {
  // 	$("#preloader").delay(600).fadeOut();
  // });

  render() {
    return true ? null : <div id="preloader">
      <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  }

}
