import React from 'react'
import PropTypes from 'prop-types'
import ButtonTooltip from '../../common-ui/components/button-tooltip'
import styles from './tooltip.css'
import { getExtURL } from '../utils'

const images = {
    share: getExtURL('/img/share.svg'),
    check: getExtURL('/img/green_check.svg'),
    annotate: getExtURL('/img/annotate.svg'),
}

export const InitialComponent = ({ createLink, createAnnotation }) => (
    <div className={styles.createButtons}>
         <ButtonTooltip
            tooltipText="Annotate (A)"
            position="bottom"
        >
        <div
            title={'Add note to highlight'}
            className={styles.annotateButton}
            onMouseDown={createAnnotation}
        >
            <span className={styles.annotateIcon} />
        </div>
        </ButtonTooltip>
         <ButtonTooltip
            tooltipText="Create Link (L)"
            position="bottom"
        >
        <div
            title={'Share a link to this highlight'}
            className={styles.linkButton}
            onMouseDown={createLink}
        >
            <span className={styles.shareIcon} />
        </div>
        </ButtonTooltip>
    </div>
)

InitialComponent.propTypes = {
    createLink: PropTypes.func.isRequired,
    createAnnotation: PropTypes.func.isRequired,
}

export const CreatingLinkComponent = () => (
    <div className={styles.progressIndicator}>
        <div className={styles.ldsEllipsis}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
)

export const CopiedComponent = () => (
    <div className={styles.copiedMessage}>
        <img className={styles.check} src={images.check} />
        <div className={styles.copiedTextContainer}>
            <p className={styles.greenText}>
                Highlight link copied to clipboard
            </p>
            <p className={styles.greyText}>
                Everyone opening it can see this quote
            </p>
        </div>
    </div>
)

export const DoneComponent = () => (
    <div className={styles.doneComponent}>
        <img className={styles.check} src={images.check} />
    </div>
)

export const ErrorComponent = () => (
    <div className={styles.errorMessage}>Error</div>
)
