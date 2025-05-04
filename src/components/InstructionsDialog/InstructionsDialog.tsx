import { Dialog } from 'radix-ui';
import * as S from './InstructionsDialog.styles.ts';
import { UnstyledButton } from '../UnstyledButton';
import { Icon } from '../Icon';
import * as React from 'react';
import { GridCell } from '../GridCell';

type InstructionsDialogProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

const InstructionsDialog: React.FC<InstructionsDialogProps> = ({
  isOpen,
  onDismiss
}) => {
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
              <S.ExampleHeading>The answer: </S.ExampleHeading>
              <S.ExampleGrid>
                <GridCell status="unstyled" letter="p" />
                <GridCell status="unstyled" letter="a" />
                <GridCell status="unstyled" letter="i" />
                <GridCell status="unstyled" letter="n" />
                <GridCell status="unstyled" letter="t" />
              </S.ExampleGrid>
            </S.Example>
            <S.Example>
              <S.ExampleHeading>Guess 1: </S.ExampleHeading>
              <S.ExampleGrid>
                <GridCell status="correct" letter="p" />
                <GridCell status="unstyled" letter="l" />
                <GridCell status="unstyled" letter="a" />
                <GridCell status="unstyled" letter="n" />
                <GridCell status="unstyled" letter="e" />
              </S.ExampleGrid>
              <S.ExampleDescription>
                <S.ExampleDescriptionHighlightedWord>
                  P
                </S.ExampleDescriptionHighlightedWord>{' '}
                is in the answer and in the correct spot
              </S.ExampleDescription>
            </S.Example>
            <S.Example>
              <S.ExampleHeading>Guess 2: </S.ExampleHeading>
              <S.ExampleGrid>
                <GridCell status="unstyled" letter="s" />
                <GridCell status="misplaced" letter="t" />
                <GridCell status="unstyled" letter="o" />
                <GridCell status="unstyled" letter="r" />
                <GridCell status="unstyled" letter="y" />
              </S.ExampleGrid>
              <S.ExampleDescription>
                <S.ExampleDescriptionHighlightedWord>
                  T
                </S.ExampleDescriptionHighlightedWord>{' '}
                is in the answer but in the wrong spot
              </S.ExampleDescription>
            </S.Example>

            <S.Example>
              <S.ExampleHeading>Guess 3: </S.ExampleHeading>
              <S.ExampleGrid>
                <GridCell status="unstyled" letter="c" />
                <GridCell status="incorrect" letter="l" />
                <GridCell status="unstyled" letter="o" />
                <GridCell status="unstyled" letter="u" />
                <GridCell status="unstyled" letter="d" />
              </S.ExampleGrid>
              <S.ExampleDescription>
                <S.ExampleDescriptionHighlightedWord>
                  L
                </S.ExampleDescriptionHighlightedWord>{' '}
                is not in the answer at all
              </S.ExampleDescription>
            </S.Example>
          </S.Examples>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default InstructionsDialog;
