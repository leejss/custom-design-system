import type { ComponentMeta } from "@storybook/react";
import ColorInfo from "./Color";
import { base, color } from "@sds/colors/salda";
import "./color.css";

const { alertColor, black, grayColor, pointColor, priamryColor, white } = base;

const { stateColor, systemColor, interactiveColor, textColor } = color;

export default {
  title: "Salda/Color",
  component: ColorInfo,
} as ComponentMeta<typeof ColorInfo>;

export const Base = () => {
  return (
    <div className="colorStory">
      <div className="colorInfoContainer">
        <ColorInfo hex={priamryColor[50]} name="Primary50" />
        <ColorInfo hex={priamryColor[100]} name="Primary100" />
        <ColorInfo hex={priamryColor[200]} name="Primary200" />
        <ColorInfo hex={priamryColor[300]} name="Primary300" />
        <ColorInfo hex={priamryColor[400]} name="Primary400" />
        <ColorInfo hex={priamryColor[500]} name="Primary500" />
        <ColorInfo hex={priamryColor[600]} name="Primary600" />
        <ColorInfo hex={priamryColor[700]} name="Primary700" />
        <ColorInfo hex={priamryColor[800]} name="Primary800" />
        <ColorInfo hex={priamryColor[900]} name="Primary900" />
      </div>
      <div className="colorInfoContainer">
        <ColorInfo hex={pointColor[50]} name="Point50" />
        <ColorInfo hex={pointColor[100]} name="Point100" />
        <ColorInfo hex={pointColor[200]} name="Point200" />
        <ColorInfo hex={pointColor[300]} name="Point300" />
        <ColorInfo hex={pointColor[400]} name="Point400" />
        <ColorInfo hex={pointColor[500]} name="Point500" />
        <ColorInfo hex={pointColor[600]} name="Point600" />
        <ColorInfo hex={pointColor[700]} name="Point700" />
        <ColorInfo hex={pointColor[800]} name="Point800" />
        <ColorInfo hex={pointColor[900]} name="Point900" />
      </div>
      <div className="colorInfoContainer">
        <ColorInfo hex={alertColor[50]} name="Alert50" />
        <ColorInfo hex={alertColor[100]} name="Alert100" />
        <ColorInfo hex={alertColor[200]} name="Alert200" />
        <ColorInfo hex={alertColor[300]} name="Alert300" />
        <ColorInfo hex={alertColor[400]} name="Alert400" />
        <ColorInfo hex={alertColor[500]} name="Alert500" />
        <ColorInfo hex={alertColor[600]} name="Alert600" />
        <ColorInfo hex={alertColor[700]} name="Alert700" />
        <ColorInfo hex={alertColor[800]} name="Alert800" />
        <ColorInfo hex={alertColor[900]} name="Alert900" />
      </div>
      <div className="colorInfoContainer">
        <ColorInfo hex={grayColor[50]} name="Gray50" />
        <ColorInfo hex={grayColor[100]} name="Gray100" />
        <ColorInfo hex={grayColor[200]} name="Gray200" />
        <ColorInfo hex={grayColor[300]} name="Gray300" />
        <ColorInfo hex={grayColor[400]} name="Gray400" />
        <ColorInfo hex={grayColor[500]} name="Gray500" />
        <ColorInfo hex={grayColor[600]} name="Gray600" />
        <ColorInfo hex={grayColor[700]} name="Gray700" />
        <ColorInfo hex={grayColor[800]} name="Gray800" />
        <ColorInfo hex={grayColor[900]} name="Gray900" />
      </div>
      <div className="colorInfoContainer">
        <ColorInfo hex={black} name="Black" />
        <ColorInfo hex={white} name="White" />
      </div>
    </div>
  );
};

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SaldaColor = () => {
  return (
    <div className="colorStory vertical">
      <div className="semantic">
        <h1>State Color</h1>
        <p>정보를 안내하는 요소에 사용되는 컬러입니다.</p>
        <div className="colorInfoContainer bordered">
          <h2>Success</h2>
          <p>성공에 사용되는 컬러입니다.</p>
          <ColorInfo
            hex={stateColor.success.main}
            hexName="Primary400"
            name="SuccessMain"
          />
          <ColorInfo
            hex={stateColor.success.sub}
            hexName="Primary50"
            name="SuccessMain"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Informative</h2>
          <p>알림에 사용되는 컬러입니다. Pending 등의 상황에 사용합니다.</p>
          <ColorInfo
            hex={stateColor.informative.main}
            hexName="Point600"
            name="InformativeMain"
          />
          <ColorInfo
            hex={stateColor.informative.sub}
            hexName="Point50"
            name="InformativeMain"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Warning</h2>
          <p>경고, 실패에 사용되는 컬러입니다.</p>
          <ColorInfo
            hex={stateColor.warning.main}
            hexName="Alert600"
            name="WarningMain"
          />
          <ColorInfo
            hex={stateColor.warning.sub}
            hexName="Alert50"
            name="WarningMain"
          />
        </div>
      </div>
      <div className="semantic">
        <h1>System Color</h1>
        <p>화면의 기본적인 구성요소에 사용되는 컬러입니다.</p>
        <div className="colorInfoContainer bordered">
          <h2>Divider</h2>
          <p>
            영역구분을 위해 사용되는 디바이더에 사용하는 컬러입니다. 용도에 맞게
            사용합니다.
          </p>
          <ColorInfo
            hex={systemColor.divider.item}
            hexName="Gray200"
            name="DividerSection"
          />
          <ColorInfo
            hex={systemColor.divider.section}
            hexName="Gray50"
            name="DividerItem"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Background</h2>
          <p>화면에 적용하는 배경컬러입니다. 위계에 맞게 사용합니다.</p>
          <ColorInfo
            hex={systemColor.background.primary}
            hexName="White"
            name="BackgroundPrimary"
          />
          <ColorInfo
            hex={systemColor.background.secondary}
            hexName="Gray50"
            name="BackgroundSecondary"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Modal</h2>
          <p>
            Modal을 활용할 때 배경을 Opacity가 있는 Black로 덮을 때 사용되는
            컬러입니다. 용도에 맞게 사용합니다.
          </p>
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Skeleton</h2>
          <p>데이터를 가져오는 동안 콘텐츠를 표시하는 컴포넌트로 사용합니다.</p>
          <ColorInfo
            hex={systemColor.skeleton}
            hexName="Gray200"
            name="Skeleton"
          />
        </div>
      </div>
      <div className="semantic">
        <h1>Interactive Color</h1>
        <p>
          상태 안내를 위해 쓰이는 컬러입니다. 버튼, 컴포넌트 등에 활용됩니다.
          위계에 맞게 사용됩니다.
        </p>
        <p></p>
        <div className="colorInfoContainer bordered">
          <h2>Enabled</h2>
          <p>활성 상태일 때 사용되는 컬러 입니다. 위계에 맞게 사용합니다.</p>
          <ColorInfo
            hex={interactiveColor.enabled.primary}
            hexName="Primary400"
            name="EnabledPrimary"
          />
          <ColorInfo
            hex={interactiveColor.enabled.secondary}
            hexName="White"
            name="EnabledSecondary"
          />
          <ColorInfo
            hex={interactiveColor.enabled.tertiary}
            hexName="Point600"
            name="EnabledSecondary"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Pressed</h2>
          <ColorInfo
            hex={interactiveColor.pressed.primary}
            hexName="Primary800"
            name="PressedPrimary"
          />
          <ColorInfo
            hex={interactiveColor.pressed.secondary}
            hexName="Gray200"
            name="PressedSecondary"
          />
          <ColorInfo
            hex={interactiveColor.pressed.tertiary}
            hexName="Point900"
            name="PresesdTertiary"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Disabled</h2>
          <p>
            비활성 상태일 때 사용되는 컬러 입니다. 모든 Basic Color는
            Gray400으로 통일된 Disabled Color를 갖습니다.
          </p>
          <ColorInfo
            hex={interactiveColor.disabled}
            hexName="Gray400"
            name="Disabled"
          />
        </div>
      </div>
      <div className="semantic">
        <h1>Text Color</h1>
        <p>
          텍스트에 쓰이는 컬러입니다. 사용기준에 따라 Text, Background 두 종류로
          이루어져 있습니다.
        </p>
        <div className="colorInfoContainer bordered">
          <h2>Text</h2>
          <p>
            Background 기준 Text에 쓰이는 컬러를 정의합니다. 위계와 상황에 맞춰
            컬러를 활용합니다.
          </p>
          <ColorInfo
            hex={textColor.text.primary}
            hexName="Gray900"
            name="TextPrimary"
          />
          <ColorInfo
            hex={textColor.text.secondary}
            hexName="Gray700"
            name="TextSecondary"
          />
          <ColorInfo
            hex={textColor.text.tertiary}
            hexName="Gray600"
            name="TextTertiary"
          />
          <ColorInfo
            hex={textColor.text.disabled}
            hexName="Gray400"
            name="TextDisabled"
          />
        </div>
        <div className="colorInfoContainer bordered">
          <h2>Button Text</h2>
          <p>
            Button의 Surface color 컬러를 정의합니다. Button에 맞춰 컬러를
            활용합니다.
          </p>
          <ColorInfo
            hex={textColor.buttonText.primary}
            hexName="White"
            name="ButtonTextPrimary"
          />
          <ColorInfo
            hex={textColor.buttonText.secondary}
            hexName="Gray400"
            name="ButtonTextSecondary"
          />
          <ColorInfo
            hex={textColor.buttonText.tertiary}
            hexName="White"
            name="ButtonTextTertiary"
          />
          <ColorInfo
            hex={textColor.buttonText.disabled}
            hexName="Gray400"
            name="ButtonTextDisabled"
          />
        </div>
      </div>
    </div>
  );
};
