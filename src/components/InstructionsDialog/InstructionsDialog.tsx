import { Dialog } from 'radix-ui';
import * as S from './InstructionsDialog.styles.ts';
import { UnstyledButton } from '../UnstyledButton';
import { Icon } from '../Icon';

type InstructionsDialogProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

const InstructionsDialog = ({ isOpen, onDismiss }: InstructionsDialogProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <S.Overlay />
        <S.Content>
          <S.CloseButton>
            <UnstyledButton>
              <Icon id="close" />
            </UnstyledButton>
          </S.CloseButton>

          <S.Description>
            <S.Heading>How to play</S.Heading>
            <S.SubHeading>Guess the word in 6 tries.</S.SubHeading>

            <S.Rules>
              <S.Rule>Each guess must be a valid 5-letter word.</S.Rule>
              <S.Rule>
                The color of the tiles will change to show how close your guess
                was to the answer.
              </S.Rule>
            </S.Rules>
          </S.Description>
          <S.Divider />

          <S.Examples>
            <S.ExamplesHeading>Examples</S.ExamplesHeading>
            <S.Example>
              <S.ExampleDescription>
                <S.ExampleDescriptionHighlightedWord>
                  W
                </S.ExampleDescriptionHighlightedWord>{' '}
                is in the answer and in the correct spot
              </S.ExampleDescription>
            </S.Example>
            <S.Example>
              <S.ExampleDescription>
                <S.ExampleDescriptionHighlightedWord>
                  I
                </S.ExampleDescriptionHighlightedWord>{' '}
                is in the answer but in the wrong spot
              </S.ExampleDescription>
            </S.Example>
          </S.Examples>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default InstructionsDialog;
