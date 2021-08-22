import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../common/SvgIcon';
import { Button } from '../../../common/Button';
import { ContentBlockProps } from '../types';
import { Fade } from 'react-awesome-reveal';
import { RightBlockContainer, Content, ContentWrapper, ButtonWrapper } from './styles';

const RightBlock = ({ title, content, button, icon, t, id }: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const selectBehavior = (type: string) => {
    if (type === 'link') {
    } else {
    }
  };

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item: any, id: number) => {
                    if (item.type === 'link') {
                      return (
                        <Button key={id} color={'white'} fixedWidth={true}>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1BM7emXn0QZ15KMus4LgfTtrqReMzBlxg/view?usp=drivesdk"
                          >
                            {t(item.title)}
                          </a>
                        </Button>
                      );
                    } else {
                      return (
                        <Button key={id} color={item.color} fixedWidth={true} onClick={() => scrollTo('about')}>
                          {t(item.title)}
                        </Button>
                      );
                    }
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="70%" height="70%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
