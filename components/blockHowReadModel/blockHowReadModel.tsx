import React, { useState } from 'react'
import { Box, Typography, Grid, Divider } from '@mui/material'

import * as styles from '../../styles/styles'


type BlockHowReadModelProps = {}

const BlockHowReadModel: React.FC<BlockHowReadModelProps> = () => {

    const [showHowReadModelBlock, setShowHowReadModelBlock] = useState<boolean>(false)
    const handleToggleShowHowReadModelBlock = () => {
        setShowHowReadModelBlock(!showHowReadModelBlock)
    }


    return (
        <Box>
            <a onClick={ () => handleToggleShowHowReadModelBlock() }>
                <Typography sx={ styles.smallTextGreenUnderline } >
                    <span style={ { textDecorationStyle: 'dotted' } }>Как читать наименования моделей?</span>
                </Typography>
            </a>


            { showHowReadModelBlock === true &&
                <Box marginTop="10px" padding="10px" sx={ { border: "1px solid #333333", borderRadius: "5px" } }>
                    <Typography sx={ styles.standardText } >
                        По цифромому обозначению модели Arbonia можно понять ее глубину и высоту.
                    </Typography>
                    <Box textAlign="center" marginTop="30px">
                        <Typography sx={ { ...styles.standardText, } } display="inline">
                            На примере модели &nbsp;
                        </Typography>
                        <Typography sx={ { ...styles.standardText, fontSize: "20px", } } display="inline">
                            Arbonia 3057:
                        </Typography>
                    </Box>
                    <Box textAlign="center" marginTop="20px">
                        <Typography sx={ { ...styles.standardTextBold, fontSize: "20px", color: "red" } } display="inline">
                            3
                        </Typography>
                        <Typography sx={ { ...styles.standardTextThin, fontSize: "20px" } } display="inline">
                            057
                        </Typography>
                        <Typography sx={ { ...styles.smallText } }>
                            Первая цифра - число трубок в секции<br />
                            <br />
                            &#34;2&#34; - двухтрубчатый радиатор глубиной 65 мм
                            <br />&#34;3&#34; - трехтрубчатыйрадиатор глубиной 105 мм.
                            <br />&#34;4&#34; - четырехтрубчатыйрадиатор глубиной 145 мм.
                            <br />&#34;5&#34; - пятитрубчатыйрадиатор глубиной 185 мм.
                            <br />&#34;6&#34; - шеститрубчатыйрадиатор глубиной 215 мм.<br /><br />
                            Чем больше труок в секции,тем мощнее и толще радиатор<br /><br />
                            В данном примере радиатор 3-трубчатый, глубиной 105 мм.
                        </Typography>
                    </Box>
                    <Box textAlign="center" marginTop="30px">
                        <Typography sx={ { ...styles.standardTextThin, fontSize: "20px" } } display="inline">
                            3
                        </Typography>
                        <Typography sx={ { ...styles.standardTextBold, fontSize: "20px", color: "red" } } display="inline">
                            057
                        </Typography>
                        <Typography sx={ { ...styles.smallText } }>
                            Последние 3 цифры - примерная высота радиаторов в см.<br />
                            Точная высота модели в мм указана в характеристиках<br /><br />
                            В данном примере радиатор имеет высоту 570 мм (примерно 57 см)
                        </Typography>
                    </Box>
                    <Box marginTop="20px" />
                </Box>
            }
        </Box>
    )
}

export default BlockHowReadModel