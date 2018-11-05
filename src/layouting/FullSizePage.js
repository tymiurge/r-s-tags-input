import React from 'react'
import PropTypes from 'prop-types'
import SizeResolver from './SizeResolver'
import { str, styling } from './../utils'
import stl from './../styles'

class FullSizePage extends React.Component {

	static propTypes = {
		header: PropTypes.object,
		footer: PropTypes.object,
		leftAside: PropTypes.object,
		leftAsideWidth: PropTypes.string,
		rightAside: PropTypes.object,
		rightAsideWidth: PropTypes.string,
		main: PropTypes.object.isRequired,
		leftAsideScrollable: PropTypes.bool,
		rightAsideScrollable: PropTypes.bool,
    mainScrollable: PropTypes.bool,
    onSizesResolving: PropTypes.func
	}

	static defaultProps = {
		header: (<div />),
		footer: (<div />),
		leftAside: (<div />),
		leftAsideWidth: '20%',
		rightAside: (<div />),
		rightAsideWidth: '20%',
		leftAsideScrollable: true,
		rightAsideScrollable: true,
    mainScrollable: true,
    onSizesResolving: () => {}
	}

	state = {
		headerHeight: null,
		footerHeight: null
	}

	onComponentSizeResolving = (h, componentName) => {
    console.log('resolving ' + componentName + ' height; h = ' + h) 
		if ( this.state[`${componentName}Height`] === null) {
      this.setState(
        {...this.state, [`${componentName}Height`]: h},
        () => {
          if (this.state.headerHeight !== null && this.state.footerHeight !== null) {
            const fullHeight = window.innerHeight
            const { footerHeight, headerHeight } = this.state
            this.props.onSizesResolving({
              fullHeight,
              footerHeight,
              headerHeight,
              mainHeight: fullHeight - footerHeight - headerHeight
            })
          }
        }
      ) 
		}
	}

	mainWidth = () => {
		const left = str.strPercentToNumber(this.props.leftAsideWidth)
		const right = str.strPercentToNumber(this.props.rightAsideWidth)
		return `${100 - left - right}%`
	}

	render() {
    const fullHeight = window.innerHeight
    console.log('fullHeight = ' + fullHeight)
		const { headerHeight, footerHeight } = this.state
		return (
			<React.Fragment>
					<SizeResolver onSizeResolving={ bound => this.onComponentSizeResolving(bound.height, 'header')}>
							{ this.props.header }
					</SizeResolver>
						{
							this.state.headerHeight !== null &&
							<div>
								{
									this.state.headerHeight !== null && this.state.footerHeight !== null &&
									/* ================= MAIN AND ASIDES CONTAINER ================= */
									<div 
										style={{
											height: fullHeight - headerHeight - footerHeight + 'px',
											display: 'flex', flexWrap: 'wrap', alignItems: 'center'
										}}
									>
										{/* ================= LEFT ASIDE ================= */}
										<div 
											style={
												styling.composeStylesByCondition(
													this.props.leftAsideScrollable,
													{
														//backgroundColor: '#ecf0f1', 
														width: this.props.leftAsideWidth, 
														height: fullHeight - headerHeight - footerHeight + 'px',
													},
													stl.yScrollable
												)
											}
										>
                      { 
                        React.cloneElement(this.props.leftAside, { height: fullHeight - headerHeight - footerHeight})
                      }
										</div>
										{/* ================= MAIN ================= */}
										<div 
											className={'leftAndRightBorders'}
											style={
												styling.composeStylesByCondition(
													this.props.mainScrollable,
													{
														flex: '1 1 auto', 
														//backgroundColor: '#f39c12', 
														width: this.mainWidth(),
														height: fullHeight - headerHeight - footerHeight,
													},
													stl.yScrollable
												)
											}
										>
											{
                        React.cloneElement(this.props.main, { height: fullHeight - headerHeight - footerHeight})
                      }
										</div>
										{/* ================= RIGHT ASIDE ================= */}
										<div 
											style={
												styling.composeStylesByCondition(
													this.props.rightAsideScrollable,
													{
														//backgroundColor: '#3498db', 
														width: this.props.rightAsideWidth, 
														height: fullHeight - headerHeight - footerHeight,
														overflowX: 'none',
														overflowY: 'auto'
													},
													stl.yScrollable
												)
											}
										>
											{
                        React.cloneElement(this.props.rightAside, { height: fullHeight - headerHeight - footerHeight})
                      }
										</div>
									</div>
								}
									
								<SizeResolver onSizeResolving={ bound => this.onComponentSizeResolving(bound.height, 'footer')}>
									{ this.props.footer }
								</SizeResolver>

							</div>
						}
			</React.Fragment>
		)
	}
}

export default FullSizePage
