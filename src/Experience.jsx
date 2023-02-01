import { Physics, Debug } from '@react-three/rapier'
import useGame from './stores/useGame'
import Lights from './Lights'
import { Level } from './Level'
import Player from './Player'
import Effects from './Effects'

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount)
  const blocksSeed = useGame((state) => state.blocksSeed)

  return (
    <>
      <color args={['#252731']} attach='background' />

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>

      <Effects />
    </>
  )
}
